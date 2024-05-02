# web server
## How to start web server
### using docker
    docker build . -t database:prod
    docker run -p {portToBeExposed}:5173 database:prod
### using vite
    npm install
    npm run dev
## changes
* change column type: Supplier[Contact] number -> str
* change column type: Product[PID] number -> str
* suggestion: Inventory product number shoud be product table PID

