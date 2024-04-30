const express = require("express");
const cors = require("cors")
const app = express();
const APPPORT = 1144;

const DBPORT = 3306;
const DBUSER = 'root';
const DBPASS = 'toor'
const DBNAME = 'meo_warehouse';

//connection
app.use(express.json());
app.use(cors());

const mysql = require("mysql2");
const db = mysql.createConnection({
    host     : '127.0.0.1',
    port     : DBPORT,
    user     : DBUSER,
    password : DBPASS,
    database : DBNAME
});

//apis
//this function use for starting a query on the database
function getQuery(querystring){
    return new Promise((resolve, reject) => {
        db.query(querystring, function (err, result) {
            if (err) {
                reject(err)}
            else{
                resolve(result);
            }
        })
    })
}
app.get('/api/getordertable', (req,res) => {
    let sql = "select * from Ordertable;"
    getQuery(sql).then((result) => {
        res.status(200).send({data: result});
    });
});

//starting app
db.connect(function(err){
    if(err) {
        throw err;
    } else {
        console.log("Database is connected");
        app.listen(APPPORT, () => console.log("server started."));
    }
});
