const express = require("express");
const mysql = require("mysql2");
const cors = require("cors")
const app = express();
const APPPORT = 1144;

const DBPORT = 3306;
const DBUSER = 'root';
const DBPASS = 'toor'
const DBNAME = 'meo_warehouse';

const DB_CONFIG = {
    host     : '10.9.0.5',
    port     : DBPORT,
    user     : DBUSER,
    password : DBPASS,
    database : DBNAME
}

//connection
app.use(express.json());
app.use(cors());

const db = mysql.createConnection(DB_CONFIG);

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
        return 1;
    } else {
        console.log("Database is connected");
        app.listen(APPPORT, () => console.log("server started."));
    }
});
