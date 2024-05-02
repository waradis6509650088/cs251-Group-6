import { App } from "./App"
import { Login } from "./Login"
import React, {useState, useContext} from "react";

export const CurrentPage = React.createContext();
export const IsLogin = React.createContext();//placeholder for login

export function LoginPageHandler(){
    const [currentpage,setCurrentPage] = useState("main");
    const [isLogin,setIsLogin] = useState(false);//placeholder for login


    function changePage(){
        if(isLogin){
            return (<App/>)
        }
        else{
            return (<Login/>)
        }
    }

    return(
        <React.StrictMode>
            <CurrentPage.Provider value={[currentpage,setCurrentPage]}>
                <IsLogin.Provider value={[isLogin, setIsLogin]}>
                    {changePage()}
                </IsLogin.Provider>
            </CurrentPage.Provider>
        </React.StrictMode>
    )
}