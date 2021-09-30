import json

from actionpack.actions import WriteBytes
from enum import Enum
from flask import Flask
from flask import make_response
from flask import request
from os import environ as envvars
from pathlib import Path


projectroot = Path(__file__).parent.parent
frontend_build = projectroot.joinpath('frontend/build/')

app = Flask(__name__, static_folder=str(frontend_build), static_url_path='/')

default_app_env = 'development'

class Environment(Enum):
    development = default_app_env
    live = 'live'
    production = 'production'


@app.errorhandler(404)
def deliver_frontend(error):
    return app.send_static_file('index.html')


@app.route('/contact', methods=['POST'])
def handle_form_data():
    result = WriteBytes('./form.results', request.data, append=True).perform(should_raise=True)
    return json.dumps({'success':True}), 200, {'ContentType':'application/json'}


if __name__ == '__main__':
    ssl_context = (envvars.get('CERTIFICATE_FILE'), envvars.get('PRIVATEKEY_FILE'))
    has_valid_ssl_context = all(ssl_context)

    app.env = Environment(envvars.get('APPLICATION_ENV', default_app_env)).value

    params = {
        'debug': envvars.get('DEBUG', True),
        'host': envvars.get('HOST', '0.0.0.0'),
        'port': envvars.get('PORT', 80) if not has_valid_ssl_context else 443,
        'threaded': envvars.get('THREADED', True)
    }
    params.setdefault('ssl_context', ssl_context) if has_valid_ssl_context else None
    app.run(**params)

