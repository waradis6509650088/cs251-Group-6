import React, {useContext, useState} from 'react'
import {AppPageHandler} from './components/AppPageHandler.jsx';
import {Sidebar} from './components/Sidebar.jsx'

export function App() {

  return (
    <>
      <Sidebar/>
      <AppPageHandler/>
    </>
  );

}
