# Upcoming Launch
This application requires client and server to be running. It obtains data from the Launch Library api and displays information on upcoming launches.

## Requirements
docker
node.js

## Client
Contains react app which performs the client side rendering. 

Rename sample.env to .env and make any needed changes. 
REACT_APP_API_PORT in the .env file is mapped to port 3001 if ths port is changed please change the server/docker-compose.yml file to make the port.

To start the client from project root

`cd client`

`npm install`

`npm start`

To stop the client
Ctrl C

## Server
Contains python api to obtain data from Launch Library and stored in redis cache. 

Port 3001 is mapped to docker port 80. This port can be changed in the docker-compose.yml file. If this port is changed please change the REACT_APP_API_PORT in client/.env to the same port.

To start server from project root

`cd server`

`docker-compose up`

To stop the server
Ctrl C
### Use with great care
stop **ALL** docker containers `docker stop $(docker ps -aq)`

remove **ALL** docker containers `docker rm $(docker ps -aq)`

remove **ALL** docker images `docker rmi $(docker images -q) -f`