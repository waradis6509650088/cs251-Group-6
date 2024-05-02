# backend server
## How to start backend server
### using docker
    docker build . -t backend:dev
    docker run -p {portToBeExposed}:1144 backend:dev
### using nodemon
    npm install
    npm install -g nodemon
    nodemon main.js
## dependencies
* start db before starting this

