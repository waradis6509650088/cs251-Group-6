const express = require("express");
const mysql = require("mysql2");
const cors = require("cors")
const app = express();
const APPPORT = 1144;

const DBPORT = 3306;
const DBIP_PROD = "10.9.0.5";
const DBIP_DEV = "127.0.0.1"
const DBUSER = 'root';
const DBPASS = 'toor'; //original = toor
const DBNAME = 'meo_warehouse';

const DB_CONFIG = {
    host     : DBIP_DEV, //change to DBIP_PROD when in production
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
    let sql = "select Ordertable.OrderID, Product.Pname, Count, orderStatus from Ordertable, Product where Product.OrderID=Ordertable.OrderID;"
    getQuery(sql).then((result) => {
        res.status(200).send({data: result});
    });
});

app.post('/api/createorder', (req, res) => {
    let sql = "insert into Ordertable (OrderID, Count, ManagerID, Rid) values " + req.body.order;
    let listsql = "insert into OrderList OrderID, List values " + req.body.orderlist;
    getQuery(listsql).then();
    getQuery(sql).then((result) => {
        res.status(200).send("send.");
    });
})

app.post('/api/updateorderstatus', (req, res) => {
    if(req.body.status == "PROCESSING"){
        let sql = "UPDATE Ordertable SET OrderStatus='PROCESSING' where OrderID=" + req.body.id + ";"
        getQuery(sql).then((result) => {
            res.status(200).send("processed")
        });
    }
    else{
        let sql = "UPDATE Ordertable SET OrderStatus='REJECTED' where OrderID=" + req.body.id + ";"
        getQuery(sql).then((result) => {
            res.status(200).send("process fail")
        });
    }
})

app.get('/api/getincomingordertable', (req,res) => {
    let sql = "select Rid, OrderID, ManagerID, Count from Ordertable where orderStatus='WAITING';"
    getQuery(sql).then((result) => {
        res.status(200).send({data: result});
    });
});

app.get('/api/getinventorytable', (req,res) => {
    let sql = "select * from Inventory;"
    getQuery(sql).then((result) => {
        res.status(200).send({data: result});
    });
});

app.get('/api/getinvoicetable', (req,res) => {
    let sql = "select SupplierID, List, date_format(sendDate, '%y/%m/%d'), sendCount from Supplier;"
    getQuery(sql).then((result) => {
        res.status(200).send({data: result});
    });
});

app.get('/api/getproducttable', (req,res) => {
    let sql = "select PID, Pname, Shelf from Product;"
    getQuery(sql).then((result) => {
        res.status(200).send({data: result});
    });
});

app.get('/api/getretailerinfo', (req, res) => {
    let sql = "select " 
    + "Retailer.Rid, Rname, Retailer_Contact.ReContact, District, SubDistrict, Province, Zipcode "
    + "from Retailer, Retailer_Contact where Retailer_Contact.Rid=Retailer.Rid;"
    getQuery(sql).then((result) => {
        res.status(200).send({data:result});
    })

})

app.get('/api/getsupplierinfo', (req, res) => {
    let sql = "select " 
    + "SupplierID, Sname, Contact, District, SubDistrict, Street, Province, Zipcode "
    + "from Supplier;"
    getQuery(sql).then((result) => {
        res.status(200).send({data:result});
    })

})
app.post('/api/addproducttable',(req, res) => {
    console.log(req.body.sql);
    getQuery(req.body.sql).then((err, result) => {
        if (err) throw err;
        res.status(200).send("send.");
    }).catch((err) => res.status(500).send(err.code));
});

app.post('/api/deleteproducttable',(req, res) => {
    console.log(req.body.sql);
    getQuery(req.body.sql).then((err, result) => {
        if (err) throw err;
        res.status(200).send("send.");
    }).catch((err) => res.status(500).send(err.code))
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
