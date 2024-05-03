import React from 'react';
import { useEffect, useState } from "react"
export const BACKENDIP = 'http://localhost:1144';
// the backend ip should be the actual backend ip, not localhost


export function Mainpage(){

    const [ordertable, setOrdertable] = useState([])
    const [inventorydata, setInventorydata] = useState([])
    const [invoicedata, setInvoicedata] = useState([])

    function getorderdata(){
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

    function getinventorydata(){
        useEffect(() => {
            fetch(BACKENDIP + '/api/getinventorytable')
            .then(response => response.json())
            .then((data) => {
                setInventorydata(generateTable(data.data));
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
        return inventorydata;
    }

    function getInvoicedata(){
        useEffect(() => {
            fetch(BACKENDIP + '/api/getinvoicetable')
            .then(response => response.json())
            .then((data) => {
                setInvoicedata(generateTable(data.data));
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
        return invoicedata;
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
            <text class="headertext">หน้าหลัก</text>
            <br/>
            <br/>
            <div class="inventory">
                <text class="tabletitle">จำนวนสินค้าในคลัง</text>
                <div class="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Shelf</th>
                                <th>Product No.</th>
                                <th>In stock</th>
                                <th>Max stock</th>
                            </tr>
                        </thead>
                        {getinventorydata()}
                    </table>
                </div>

            </div>
            <div class="ordertable">
                <text class="tabletitle">ออเดอร์เข้า</text>
                <div class="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Product Name</th>
                                <th>Count</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        {getorderdata()}
                    </table>
                </div>
            </div>
            <br/>
            <div class="invoicetable">
                <text class="tabletitle">ใบสั่งซื้อ</text>
                <div class="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Retailer ID</th>
                                <th>Product amount</th>
                                <th>Date sent</th>
                                <th>Total amount</th>
                            </tr>
                        </thead>
                        {getInvoicedata()}
                    </table>
                </div>

            </div>
            <br/>
            <text class="tabletitle">ประเภทสินค้า</text>
            <br/>
            <div class="picturebox-container">
                <div class="picturebox">
                    <img src="https://www.perfectcompanion.com/uploads/stock/154.png" class="picture" />
                    <text class="picturedesc">อาหารแห้ง</text>
                </div>
                <div class="picturebox">
                    <img src="https://www.perfectcompanion.com/uploads/stock/171.png" class="picture" />
                    <text class="picturedesc">ขนม</text>
                </div>
                <div class="picturebox">
                    <img src="https://www.perfectcompanion.com/uploads/stock/1f49237d-179a-42e6-9f03-a764fa4740dc.png" class="picture" />
                    <text class="picturedesc">อาหารเปียก</text>
                </div>
            </div>
            <br/>
    </div>
    )

}
