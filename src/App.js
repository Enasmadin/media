
import './App.scss';
import Content from './components/Content';

import Leftsidebar from './components/Leftsidebar';
import Navigation from './components/Navigation';
import Rightsidebar from './components/Rightsidebar';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <main   className='main-container'>
        <Leftsidebar/>
        <Content/>
        <Rightsidebar/>

     </main>
      
    </div>
  );
}

export default App;
