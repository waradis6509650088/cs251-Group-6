import React from 'react';
import { useEffect, useState } from "react"
const BACKENDIP = 'http://10.9.0.6:1144';


export function Mainpage(){

    const [ordertable, setOrdertable] = useState([])

    function getorderdata(){
        let output;
        useEffect(() => {
            fetch(BACKENDIP + '/api/getordertable')
            .then(response => response.json())
            .then((data) => {
                setOrdertable(generateTable(data.data));
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
        return ordertable;
    }

    function generateTable(data) {
        return (
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {Object.values(item).map((value, index) => (
                            <td key={index}>{value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        );
    }

    return (
        <div class='mainpage'>
            <text style={{fontSize: 30}}>หน้าหลัก</text>
            <br/>
            <br/>
            <div class="inventory">
                <text style={{fontSize: 30}}>Inventory</text>
                <div class="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Location</th>
                                <th>Product No.</th>
                                <th>In stock</th>
                                <th>Max stock</th>
                            </tr>
                        </thead>
                    </table>
                </div>

            </div>
            <div class="ordertable">
                <text style={{fontSize: 30}}>Incoming order</text>
                <div class="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Count</th>
                                <th>Manager ID</th>
                                <th>Retailer ID</th>
                            </tr>
                        </thead>
                        {getorderdata()}
                    </table>
                </div>
            </div>
            <br/>
            <div class="inventorytable">
                <text style={{fontSize: 30}}>Inventory</text>
                <div class="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Order ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                    </table>
                </div>

            </div>
            <br/>
            <text style={{fontSize: 30}}>ประเภทสินค้า</text>
            <br/>
            <div class="picturebox-container">
                <div class="picturebox"/>
                <div class="picturebox"/>
                <div class="picturebox"/>
                <div class="picturebox"/>
                <div class="picturebox"/>
            </div>
            <br/>
    </div>
    )

}
