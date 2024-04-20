function Mainpage(){
    return (
        <div class='mainpage'>
            <text style={{fontSize: 30}}>หน้าหลัก</text>
            <div class="ordertable">
            <text style={{fontSize: 30, paddingBottom: "5px"}}>In order</text>
            <div class="table1">
            <table>
                <thead>
                    <tr>
                        <th class="column1">Date</th>
                        <th class="column2">Order ID</th>
                        <th class="column3">Name</th>
                        <th class="column4">Price</th>
                        <th class="column5">Quantity</th>
                        <th class="column6">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="column1">2017-09-29 01:22</td>
                        <td class="column2">200398</td>
                        <td class="column3">iPhone X 64Gb Grey</td>
                        <td class="column4">$999.00</td>
                        <td class="column5">1</td>
                        <td class="column6">$999.00</td>
                    </tr>
                </tbody>
            </table>
            </div>
            </div>
    </div>
    )

}

export default Mainpage