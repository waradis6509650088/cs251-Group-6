# database server
## How to start database server
### using docker
    docker build . -t database:prod
    docker run -p {portToBeExposed}:3306 database:prod
### connecting through mysql shell
    \c localhost:3306 -u root -p
* pass = toor
## changes
* change to mariadb
* change table name Order to Ordertable: reserve word
* change column type: Supplier[Contact] number -> str
* change column type: Product[PID] number -> str
* change all contacts tables ID to be string
* suggestion: Inventory product number shoud be product table PID
* add column: orderStatus in Ordertable

