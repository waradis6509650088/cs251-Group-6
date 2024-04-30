import React from 'react';
const BACKENDIP = 'http://localhost:1144';

function getorderdata(){
    let output;
    fetch(BACKENDIP + '/api/getordertable')
    .then(response => response.json())
    .then((data) => {
        // console.log(data.data);
        console.log(data);
        // console.log(generateTable(data.data));
        // let output = generateTable(data.data);
        // return output
        // let output = generateTable(data)
        output = (
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
    return output;
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

export function Mainpage(){
    return (
        <div class='mainpage'>
            <text style={{fontSize: 30}}>หน้าหลัก</text>
            <br/>
            <br/>
            <div class="invoicetable">
                <text style={{fontSize: 30}}>Invoice</text>
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
                    </table>
                </div>

            </div>
            <div class="ordertable">
                <text style={{fontSize: 30}}>In order</text>
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
