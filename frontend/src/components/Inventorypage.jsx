import { useState, useEffect ,useRef} from "react";
import React from "react";
const BACKENDIP = 'http://localhost:1144';

//pain
import food1 from "./res/food_pic/ababa food.png"
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

    function generateTableWithPicture(data) {
         let picMap = {
            'ababa food' : food1,
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

    function addProductToDB(){
        let dataToSend = {
            shelf:shelfid.current.value,
            ID:productid.current.value,
            name:productname.current.value,
            OID:orderid.current.value,
        }
        console.log(dataToSend.shelf);
        setAddButton(!addButton);
        searchButton();
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
                            </tr>
                        </thead>
                        {getProductdata()}
                    </table>
                </div>
        </div>
    )
}