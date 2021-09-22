FROM nikolaik/python-nodejs:python3.9-nodejs16
#---------------------------------
MAINTAINER The Radiativity Company
#---------------------------------
WORKDIR /fulcrum
ADD backend backend
ADD frontend frontend
WORKDIR /fulcrum/frontend
RUN npm install
RUN npm run build
WORKDIR /fulcrum/backend
RUN pip install -r requirements.txt
WORKDIR /fulcrum
CMD python backend/app.py --host 0.0.0.0 --port 80
