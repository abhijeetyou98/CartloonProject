import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/home/Home';
import Menu from './components/Menu';
import Pganniversary from './components/anniversary/Pganniversary';
import Pgbirthday from './components/birthday/Pgbirthday';
import Accanopy from './components/canopy/Accanopy';
function App() {
  return (
    <div>
    <Menu/>
      <Routes>
      
        <Route path='/' element={<Home />} />

        <Route path='/Pganniversary' element={<Pganniversary />} />
        <Route path='/Pgbirthday' element={<Pgbirthday />} />
        <Route path='/src/components/canopy/Accanopy.js' element={<Accanopy />} />




        


      </Routes>

    </div>
  );
}

export default App;
