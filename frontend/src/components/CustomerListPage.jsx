import React, { useState, useContext, useEffect } from "react";
import { BACKENDIP } from "./Mainpage";
export function CustomerListPage(){
    const [displaytable, setDisplayTable] = useState("Supplier");
    const [retailerdata, setRetailerdata] = useState();
    const [supplierdata, setSupplierdata] = useState();

    function getRetailerdata(){
        useEffect(() => {
            fetch(BACKENDIP + '/api/getretailerinfo')
            .then(response => response.json())
            .then((data) => {
                setRetailerdata(generateTable(data.data));
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
        }, [displaytable])
        return retailerdata;
    }

    function getSupplierdata(){
        useEffect(() => {
            fetch(BACKENDIP + '/api/getSupplierinfo')
            .then(response => response.json())
            .then((data) => {
                setSupplierdata(generateTable(data.data));
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
        }, [displaytable])
        return supplierdata;
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

    function getUserTable(){
        if(displaytable == "Supplier"){
            return (
                <>
                    <thead>
                        <tr>
                            <th>Supplier ID</th>
                            <th>Name</th>
                            <th>Phone No.</th>
                            <th>District</th>
                            <th>Sub-District</th>
                            <th>Street</th>
                            <th>Province</th>
                            <th>Postal code</th>
                        </tr>
                    </thead>
                    {getSupplierdata()}
                </>
            )
        }
        else{
            return (
                <>
                    <thead>
                        <tr>
                            <th>Retailer ID</th>
                            <th>Name</th>
                            <th>Phone No.</th>
                            <th>Address</th>
                            <th></th>
                            <th></th>
                            <th>Postal code</th>
                        </tr>
                    </thead>
                    {getRetailerdata()}
                </>
            )

        }

    }

    return (
        <div class="customerlistpage">
            <text class="headertext">ข้อมูลลูกค้า</text>
            <div class="top-table">
                <button onClick={() => setDisplayTable("Supplier")} class="filterbutton">Supplier</button>
                <button onClick={() => setDisplayTable("Retailer")} class="filterbutton right">Retailer</button>
            </div>
            <div class="table">
                <table>
                    {getUserTable()}
                </table>
            </div>
        </div>
    )
}