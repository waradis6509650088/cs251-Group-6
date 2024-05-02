export function OrderListPage(){
    return (
        <div class="orderlistpage">
            <text class="headertext">สถานะคำสั่งซื้อ</text>
            <div class="table">
                <table>
                    <thead>
                        <tr>
                            <th>Preview</th>
                            <th>Product ID</th>
                            <th>Product name</th>
                            <th>Shelf</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <button class="valid-button"></button>
                            <button class="invalid-button"></button>
                        </td>
                    </tbody>
                </table>
            </div>
        </div>
    )
}