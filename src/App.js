
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import Business from './body/business/business';
import Entertainment from './body/entertainment/entertainment';
import Navbar from './body/navbar';
import Politics from './body/Politics/politics';
import Sports from './body/sports/sports';
import Topnews from './body/Topnews/topnews';

function App() {
  return (
    // <div className="App">
    //   <Navbar/>
    // </div>
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/navbar' element={<Navbar/>}/>
          <Route path='/' element={<Topnews/>}/>
          <Route path='/politics' element={<Politics/>}/>
          <Route path='/business' element={<Business/>}/>
          <Route path='/entertainment' element={<Entertainment/>}/>
          <Route path='/sports' element={<Sports/>}/>
        </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
