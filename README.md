# fulcrum
a combination CDN + API


## Overview

`fulcrum` consists of a backend and a frontend.
The backend is made with [`flask`](https://flask.palletsprojects.com/en/2.0.x/) and serves the frontend.
The frontend is a [`react`](https://reactjs.org/docs/getting-started.html) app that can send request to backend endpoints and beyond.

## Setup

All that's required is that the server is started.
Being that the server is written in `python`, you'll need a `python` environment.
I'd recommend using [`pyenv`](https://github.com/pyenv/pyenv), but if you wanna skip the fancy stuff, just run the following in your terminal:
```
python3 -m pip install nox
```
Once `nox` is installed, navigate to the "backend/" directory.
Use `nox -l` to see the list of possible environments that can be created--e.g.
```
* backend-venv-3.6
* backend-venv-3.7
* backend-venv-3.8
* backend-venv-3.9
```
If your version of `python3` is 3.9, you'll need to activate your `nox` environment and do so with
```
source .nox/backend-venv-3.9/bin/activate
```
Now the `flask` server can be started.
To start the server, simply run
```
python app.py --host=0.0.0.0
```

## Contributing

Checkout the [issues page](https://github.com/the-radiativity-company/fulcrum/issues) for this repo.
Feel free to comment or ask questions on the issue itself.
If there's an issue you'd like to work on, please do so on a branch that includes:
* the issue number
* some hyphenated description of the work being done
Named something like:
```
fulcrum#22-this-is-an-example
```

