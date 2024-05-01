import { useContext } from 'react';
import {Mainpage} from '../Mainpage.jsx'
import {Inventorypage} from '../Inventorypage.jsx'
import { CurrentPage } from '../App.jsx'
import { OrderInPage } from '../OrderInPage.jsx'
import { CustomerListPage } from './CustomerListPage.jsx';
import { OrderListPage } from '../OrderListPage.jsx';

export function AppPageHandler(){
    const [currentpage,setCurrentPage] = useContext(CurrentPage);

    switch(currentpage){
        case 'inventory':
            return (
                <Inventorypage/>
            )
        case 'orderIn':
            return (
                <OrderInPage/>
            )
        case 'customerlist':
            return (
                <CustomerListPage/>
            )
        case 'orderlist':
            return (
                <OrderListPage/>
            )
        default:
            return (
                <Mainpage/>
            )
    }
}