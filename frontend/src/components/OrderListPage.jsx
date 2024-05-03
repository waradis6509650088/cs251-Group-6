import { useState , useEffect} from "react";
import { BACKENDIP } from "./Mainpage";

export function OrderListPage(){

    const [ordertable, setOrdertable] = useState();

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

    function generateTable(data) {
        return (
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {Object.values(item).map((value, index) => (
                            <td key={index}><div class={"column" + index + " " + value}>{value}</div></td>
                        ))}
                    </tr>
                ))}
            </tbody>
        );
    }

    return (
        <div class="orderlistpage">
            <text class="headertext">สถานะคำสั่งซื้อ</text>
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
    )
}