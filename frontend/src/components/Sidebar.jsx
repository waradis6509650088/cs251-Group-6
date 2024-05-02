import { useContext, useState } from 'react';
import catlogo from './res/catlogo.png'
import { CurrentPage } from '../LoginPageHandler';
import { IsLogin } from '../LoginPageHandler';


export function Sidebar(){

    const [currentpage,setCurrentPage] = useContext(CurrentPage);
    const [isLogin, setIsLogin] = useContext(IsLogin);

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
            <button class="logout-button" onClick={() => setIsLogin(!isLogin)}>
                <text class="logout-text">ออกจากระบบ</text>
                <img class="logout-image" src="https://cdn-icons-png.flaticon.com/512/182/182448.png"/>
            </button>
        </div>
    );

}