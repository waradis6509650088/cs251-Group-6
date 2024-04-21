import { useState } from 'react';
import catlogo from './res/catlogo.png'

const [currentPage,setCurrentPage] = useState("main");

const changeCurrentPage = (str) => {
    setCurrentPage(str);
}

function Sidebar(){
    return(
        <div class="sidebar">
            <img src={catlogo} alt='catlogo' class='catlogo'/>
            <p class="username">username</p>
            <p class="username">usertype</p>
            <br/>
            <br/>
            <button class="sidebar-button" onClick={() => changeCurrentPage('main')}>หน้าหลัก</button>
            <button class="sidebar-button" onClick={() => changeCurrentPage('inventory')}>คลังสินค้า</button>
            <button class="sidebar-button" onClick={() => changeCurrentPage('orderIn')}>รับเข้า</button>
            <button class="sidebar-button" onClick={() => changeCurrentPage('orderlist')}>คำสั่งซื้อ</button>
            <button class="sidebar-button" onClick={() => changeCurrentPage('customerlist')}>ลูกค้า/ผู้จัดจำหน่าย</button>
            <text>{currentPage}</text>
        </div>
    );

}
export default Sidebar