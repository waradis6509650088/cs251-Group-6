import React, { useEffect, useState } from "react";
import { BACKENDIP } from "./Mainpage";

export function OrderInPage(){

    const [ordertable, setOrdertable] = useState([])

    function getorderdata(){
        useEffect(() => {
            fetch(BACKENDIP + '/api/getincomingordertable')
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

    function changeOrderStatus(orderid, status){
        let jsonbody = {
            id:orderid,
            status:status
        }
        let url = BACKENDIP + "/api/updateorderstatus"
        fetch(url, {
            method: "POST",
            body: JSON.stringify(jsonbody),
            headers: {
                "Content-Type":"application/json"
            }
        })
    }

    function generateTable(data) {
        return (
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {Object.values(item).map((value, index) => (
                            <td key={index}>{value}</td>
                        ))}
                        <td>
                            <button class="valid-button" onClick={() => changeOrderStatus(item.OrderID, "PROCESSING")}>Accept</button>
                            <button class="invalid-button" onClick={() => changeOrderStatus(item.OrderID, "REJECTED")}>Reject</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        );
    }
    return (
        <div class="orderinpage">
            <text class="headertext">รับสินค้า</text>
            <div class="table">
                <table>
                    <thead>
                        <tr>
                            <th>Retailer ID</th>
                            <th>Order ID</th>
                            <th>Manager ID</th>
                            <th>Count</th>
                            <th></th>
                        </tr>
                    </thead>
                    {getorderdata()}
                </table>
            </div>
        </div>
    )
}