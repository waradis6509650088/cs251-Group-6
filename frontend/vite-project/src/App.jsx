import {useState} from 'react'
import {Sidebar} from './Sidebar.jsx'
import {Mainpage} from './Mainpage.jsx'
import {Inventorypage} from './Inventorypage.jsx'

export function App() {

  let defaultPage = <Mainpage/>;

  function changeToPage({currentPage}) {
    switch(currentPage){
      case 'inventory':
        return <Inventorypage/>
      default:
        return defaultPage;
    }
  } 
  
  const [displayedPage,setDisplayedPage] = useState(changeToPage());

  return (
    <body>
      <Sidebar/>
      {displayedPage}
    </body>
  );

}
