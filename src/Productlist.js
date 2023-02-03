import React from 'react';
import './index.css';
import Anavbar from './components/Anavbar';
import Acarousel from './components/Acarousel';
import Adropdown from './components/Adropdown';
import Gcarousel from './components/Gcarousel';
import Agbirthday from './components/Agbirthday';
import Afooter from './components/Afooter';

const Productlist = () => {
  return (
    <div>
    <Anavbar/>
    <Acarousel/>
    <Adropdown/>
    <Gcarousel/>
    <Agbirthday/>
    <Afooter/>
    </div>
  )
}

export default Productlist;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
