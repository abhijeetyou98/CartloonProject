import React from 'react';
import Acarousel from '../Acarousel';
import Gcarousel from '../Gcarousel';
import Agtrend from '../trending/Agtrend';
import Anavbar from '../Anavbar';
import Adropdown from '../Adropdown';
import Afooter from '../Afooter';
import Agbirthday from '../birthday/Agbirthday';
import Accanopy from '../canopy/Accanopy';
const Home = () => {
  return (
    <div>
    <Anavbar/>
   <Acarousel/>
    <Adropdown/>
    <Gcarousel/>
    <Agbirthday/>
    <Agtrend/>
    <Gcarousel/>
    <Accanopy/>
    <Afooter/>
    </div>
  )
}

export default Home;
