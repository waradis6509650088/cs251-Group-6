import { useState, useEffect ,useRef} from "react";
import React from "react";
const BACKENDIP = 'http://localhost:1144';

//pain
import food1 from "./res/food_pic/food1.png"
import missing from "./res/food_pic/missing.png"


export function Inventorypage(){

    const [productdata, setProductdata] = useState([])
    const [refresh, setRefresh] = useState(true);
    const [addButton,setAddButton] = useState(false);

    const shelfid = useRef();
    const productid = useRef();
    const retailid = useRef();
    const managerid = useRef();

    const orderid = useRef();
    const productname = useRef();
    const orderamount = useRef();


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
        }, [refresh])
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
        refreshFetch();
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
                            <button class="deletebutton" onClick={() => {deleteEntry(item.Pname,item.PID,item.Shelf);refreshFetch();}}>
                                <img class="deletebutton-image" src="https://cdn-icons-png.flaticon.com/512/484/484662.png"/>
                            </button>
                        </td>
                    </tr>
                </tbody>
            );
        });
    
        return tableRows;
        
    }

    function changeAddButtonState(){
        setAddButton(!addButton);
    }

    function refreshFetch(){
        setRefresh(!refresh);
    }

    function addProductToDB(){
        changeAddButtonState();
        let dataToSend = {
            shelf:shelfid.current.value,
            ID:productid.current.value,
            name:productname.current.value,
            OID:orderid.current.value,
            amount:orderamount.current.value,
            retailerid:retailid.current.value,
            MID:managerid.current.value
        }
        console.log(dataToSend.shelf);
        searchButton();
        let url = BACKENDIP + '/api/addproducttable';
        fetch(url, {
            method: "POST",
            body: JSON.stringify(dataToSend),
            headers: {
                "Content-Type" : "application/json"
            }
        })
        refreshFetch();
    }

    function searchButton(){
        if(addButton){
            return (
                <>
                    <button class="additembutton" onClick={() => {changeAddButtonState();refreshFetch()}}>x</button>
                    <button class="addproduct" onClick={() => {addProductToDB();refreshFetch();}}>confirm</button>
                </>
            );

        }else{
            return (
                <>
                    <button class="additembutton" onClick={() => {refreshFetch();}}>
                        <img class="refresh" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-refresh-512.png"/>
                    </button>
                    <button class="additembutton left" onClick={() => {changeAddButtonState();refreshFetch();}}>+</button>
                    <input class="search" placeholder="Search product name..." />
                </>
            );
        }
    }

    function changeDisplay(){
        let tableReturn = (
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
        )
        if(!addButton){
            return tableReturn;
        }
        else{
            return(
                <>
                    <div class="additem input">
                        <input class="addproductinput" ref={shelfid} placeholder="Shelf" /><br/>
                        <input class="addproductinput" ref={productid} placeholder="Product ID" /><br/>
                        <input class="addproductinput" ref={productname} placeholder="Product name" /><br/>
                        <input class="addproductinput" ref={orderid} placeholder="order ID" />
                        <input class="addproductinput" ref={orderamount} placeholder="amount" /><br/>
                        <input class="addproductinput" ref={retailid} placeholder="retailer ID" /><br/>
                        <input class="addproductinput" ref={managerid} placeholder="manager ID" /><br/>
                    </div>
                </>
            )
        }

    }


    return (
        <div class="inventorypage">
            <text class="headertext">คลังสินค้า</text>
            <div class="searchbar">
                {searchButton()}
            </div>
            {changeDisplay()}
        </div>
    )
}