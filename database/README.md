# database server
## How to start database server
### using docker
    docker build . -t database:prod
    docker run -p {portToBeExposed}:3306 database:prod
### connecting through mysql shell
    \c localhost:3306 -u root -p
* pass = toor
## changes
* change column type: Supplier[Contact] number -> str
* change column type: Product[PID] number -> str
* suggestion: Inventory product number shoud be product table PID

