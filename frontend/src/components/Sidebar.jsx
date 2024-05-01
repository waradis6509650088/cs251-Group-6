import { useContext, useState } from 'react';
import catlogo from './res/catlogo.png'
import { CurrentPage } from './App';


export function Sidebar(){

    const [currentpage,setCurrentPage] = useContext(CurrentPage);

    return(
        <div className="sidebar">
            <img src={catlogo} alt='catlogo' class='catlogo'/>
            <p class="username">admin</p>
            <p class="username">owner</p>
            <br/>
            <br/>
            <button class="sidebar-button" onClick={() => setCurrentPage('main')}>หน้าหลัก</button>
            <button class="sidebar-button" onClick={() => setCurrentPage('inventory')}>คลังสินค้า</button>
            <button class="sidebar-button" onClick={() => setCurrentPage('orderIn')}>รับเข้า</button>
            <button class="sidebar-button" onClick={() => setCurrentPage('orderlist')}>คำสั่งซื้อ</button>
            <button class="sidebar-button" onClick={() => setCurrentPage('customerlist')}>ลูกค้า/ผู้จัดจำหน่าย</button>
        </div>
    );

}