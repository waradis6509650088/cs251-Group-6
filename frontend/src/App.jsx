import React, {useState} from 'react'
import {AppPageHandler} from './components/AppPageHandler.jsx';
import {Sidebar} from './components/Sidebar.jsx'

export const CurrentPage = React.createContext();

export function App() {

  const [currentpage,setCurrentPage] = useState("main");

  return (
    <CurrentPage.Provider value={[currentpage,setCurrentPage]}>
      <Sidebar/>
      <AppPageHandler/>
    </CurrentPage.Provider>
  );

}
