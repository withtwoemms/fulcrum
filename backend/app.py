from pathlib import Path
from flask import Flask


projectroot = Path(__file__).parent.parent
frontend_build = projectroot.joinpath('frontend/build/')
app = Flask(__name__, static_folder=str(frontend_build), static_url_path='/')

@app.route("/")
def deliver_frontend():
    return app.send_static_file('index.html')

