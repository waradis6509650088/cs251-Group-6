import { useState, useEffect ,useRef} from "react";
import React from "react";
const BACKENDIP = 'http://localhost:1144';

//pain
import food1 from "./res/food_pic/food1.png"
import food2 from "./res/food_pic/delicious food.png"
import food3 from "./res/food_pic/meeeoo food.png"
import missing from "./res/food_pic/missing.png"


export function Inventorypage(){

    const [productdata, setProductdata] = useState([])

    function getProductdata(){
        useEffect(() => {
            fetch(BACKENDIP + '/api/getproducttable')
            .then(response => response.json())
            .then((data) => {
                setProductdata(generateTableWithPicture(data.data));
            })
            .catch(error => {
                return (
                    <tbody>
                        <tr>
                            <td>no info</td>
                            <td>no info</td>
                            <td>no info</td>
                            <td>no info</td>
                        </tr>
                    </tbody>
                )
            })
        }, [])
        return productdata;
    }

    function deleteEntry(name, pid, shelf){
        let url = BACKENDIP + "/api/deleteproducttable";
        let sql = "delete from Product where PID='" 
        + pid 
        + "'and Pname='" 
        + name 
        + "'and Shelf='" 
        + shelf 
        + "'";
        let sql2 = "delete from Inventory where NumberOfProduct='" 
        + pid 
        + "'and Shelf='" 
        + shelf 
        + "'";

        let jsonbody = {
            sql: sql
        }
        let jsonbody2 = {
            sql:sql2
        }
        console.log(jsonbody);
        fetch(url, {
            method: "POST",
            body: JSON.stringify(jsonbody),
            headers: {
                "Content-Type" : "application/json"
            }
        })
        fetch(url, {
            method: "POST",
            body: JSON.stringify(jsonbody2),
            headers: {
                "Content-Type" : "application/json"
            }
        })
    }

    function generateTableWithPicture(data) {
         let picMap = {
            'food1' : food1,
            'meeeoo food' : food3,
            'delicious food' : food2,
        }       
        const tableRows = data.map(item => {
            const imagePath = picMap[item.Pname] === undefined? missing : picMap[item.Pname];
            return (
                <tbody>
                    <tr key={item.PID}>
                        <td><img src={imagePath} alt={item.Pname} class="foodpic"/></td>
                        <td>{item.PID}</td>
                        <td>{item.Pname}</td>
                        <td>{item.Shelf}</td>
                        <td>
                            <button class="deletebutton" onClick={() => deleteEntry(item.Pname,item.PID,item.Shelf)}>
                                <img class="deletebutton-image" src="https://cdn-icons-png.flaticon.com/512/484/484662.png"/>
                            </button>
                        </td>
                    </tr>
                </tbody>
            );
        });
    
        return tableRows;
        
    }

    const [addButton,setAddButton] = useState(false);

    function changeAddButtonState(){
        setAddButton(!addButton);
    }

    const shelfid = useRef();
    const productid = useRef();
    const productname = useRef();
    const orderid = useRef();
    const orderamount = useRef();

    function addProductToDB(){
        let dataToSend = {
            shelf:'"' + shelfid.current.value + '"',
            ID:',"' + productid.current.value + '"',
            name:',"' + productname.current.value + '"',
            OID:',"' + orderid.current.value + '"',
            amount: ',"'+ orderamount.current.value + '"'
        }
        console.log(dataToSend.shelf);
        setAddButton(!addButton);
        searchButton();
        let url = BACKENDIP + '/api/addproducttable';
        let sql = 'insert into Product values '
        + '(' + dataToSend.shelf + dataToSend.ID + dataToSend.name + dataToSend.OID + ');'
        let sql2 = 'insert into Inventory values '
        + '(' + dataToSend.shelf + dataToSend.ID 
        + dataToSend.amount + dataToSend.amount + ');'
        let jsonbody = {
            sql:sql
        }
        let jsonbody2 = {
            sql:sql2
        }
        fetch(url, {
            method: "POST",
            body: JSON.stringify(jsonbody),
            headers: {
                "Content-Type" : "application/json"
            }
        })
        fetch(url, {
            method: "POST",
            body: JSON.stringify(jsonbody2),
            headers: {
                "Content-Type" : "application/json"
            }
        })
    }

    function searchButton(){
        if(addButton){
            return (
                <>
                    <button class="additembutton" onClick={() => changeAddButtonState()}>x</button>
                    <button class="addproduct" onClick={() => addProductToDB()}>confirm</button>
                    <input class="addproductinput" ref={shelfid} placeholder="Shelf" />
                    <input class="addproductinput" ref={productid} placeholder="ID" />
                    <input class="addproductinput" ref={productname} placeholder="name" />
                    <input class="addproductinput" ref={orderid} placeholder="order" />
                    <input class="addproductinput" ref={orderamount} placeholder="amount" />
                </>
            );

        }else{
            return (
                <>
                    <button class="additembutton" onClick={() => changeAddButtonState()}>+</button>
                    <input class="search" placeholder="Search product name..." />
                </>
            );
        }
    }


    return (
        <div class="inventorypage">
            <text class="headertext">คลังสินค้า</text>
            <div class="searchbar">
                {searchButton()}
            </div>
            <div class="table">
                <table>
                    <thead>
                        <tr>
                            <th class="piccolumn">Preview</th>
                            <th>Product ID</th>
                            <th>Product name</th>
                            <th>Shelf</th>
                            <th></th>
                        </tr>
                    </thead>
                    {getProductdata()}
                </table>
            </div>
        </div>
    )
}