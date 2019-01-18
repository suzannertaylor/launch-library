FROM tiangolo/uwsgi-nginx-flask:python3.6

RUN pip install -U flask-cors redis

COPY ./app /app

# Set default directory
ENV HOME /app
WORKDIR /app

# Set environ vars
ENV REDIS_HOST 'appredis'
ENV REDIS_PORT 6379