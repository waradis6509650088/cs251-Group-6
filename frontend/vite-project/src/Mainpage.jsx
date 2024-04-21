function orderdata_stub(){
    return (
        <tbody>
            <tr>
                <td>2017-09-29 01:22</td>
                <td>200398</td>
                <td>iPhone X 64Gb Grey</td>
                <td>$999.00</td>
                <td>1</td>
                <td>$999.00</td>
            </tr>
        </tbody>
    )
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
                                <th>Date</th>
                                <th>Order ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        {orderdata_stub()}
                        {orderdata_stub()}
                        {orderdata_stub()}
                        {orderdata_stub()}
                        {orderdata_stub()}
                        {orderdata_stub()}
                        {orderdata_stub()}
                        {orderdata_stub()}
                        {orderdata_stub()}
                        {orderdata_stub()}
                        {orderdata_stub()}
                        {orderdata_stub()}
                    </table>
                </div>

            </div>
            <div class="ordertable">
                <text style={{fontSize: 30}}>In order</text>
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
                        {orderdata_stub()}
                        {orderdata_stub()}
                        {orderdata_stub()}
                        {orderdata_stub()}
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
                        {orderdata_stub()}
                        {orderdata_stub()}
                        {orderdata_stub()}
                        {orderdata_stub()}
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
