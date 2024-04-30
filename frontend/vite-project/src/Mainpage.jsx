const BACKENDIP = '127.0.0.1:1144';
function getorderdata(){
    fetch('127.0.0.1:1144/api/getordertable')
    .then(response => {
        response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        return (
            <body>
                <tr>
                    <td>
                        null
                    </td>
                </tr>
            </body>
        )
    })
}

function generateTable(data) {
    var html = '';
    data.forEach(function (item) {
        html += '</body>';
        html += '<tr>';
        for (var key in item) {
            html += '<td>' + item[key] + '</td>';
        }
        html += '</tr>';
        html += '</body>';
    });
    
    return html;
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
                        {getorderdata()}
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
