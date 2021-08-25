import nox

from os import environ as envvars
from os import getcwd as curdir
from pathlib import Path
from sys import executable as python


SYSTEM_PYTHON = python
PROJECT_NAME = Path(curdir()).stem
VENV = f'{PROJECT_NAME}-venv'
TESTDIR = 'tests'

@nox.session(name=VENV, python=['3.6', '3.7', '3.8', '3.9'], reuse_venv=True)
def tests(session):
    session.install('-r', 'requirements.txt')

