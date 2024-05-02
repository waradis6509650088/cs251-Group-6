# web server
## How to start web server
### using docker
    docker build . -t web:dev
    docker run -p {portToBeExposed}:5173 web:dev
### using vite
    npm install
    npm run dev

