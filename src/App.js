
import { useCallback, useEffect, useState } from 'react';
import './App.scss';
import Content from './components/Content';

import Leftsidebar from './components/Leftsidebar';
import Navigation from './components/Navigation';
import Rightsidebar from './components/Rightsidebar';
// api of it  
// https://developers.forem.com/api/v1#tag/articles/operation/getArticles //

function App() {
  const[toggleSideBar,setTogleSideBar]= useState(false);

  const toggleShowSideBar= ()=>{
    setTogleSideBar(!toggleSideBar);
  }
  return (
    <div>
      <Navigation openMenue={toggleShowSideBar} className="navigate"/>
      <main   className='main-container'>
        <Leftsidebar closeMenue={toggleShowSideBar}  showSideBar={toggleSideBar}/>
        <Content/>
        <Rightsidebar/>
        {/* <div  className='overlay'></div>  */}
     </main>
    
    </div>
  );
}

export default App;
