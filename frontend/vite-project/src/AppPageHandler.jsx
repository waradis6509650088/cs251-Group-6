import { useContext } from 'react';
import {Mainpage} from './Mainpage.jsx'
import {Inventorypage} from './Inventorypage.jsx'
import { CurrentPage } from './App.jsx'

export function AppPageHandler(){
    const [currentpage,setCurrentPage] = useContext(CurrentPage);

    switch(currentpage){
        case 'inventory':
            return (
                <Inventorypage/>
            )
        default:
            return (
                <Mainpage/>
            )
    }
}