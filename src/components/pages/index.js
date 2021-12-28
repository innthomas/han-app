import React from 'react';
//import Hero from '../general/Hero';
//import Content from '../general/Content';
import Zoom from 'react-reveal/Zoom';
import NewSlider from '../general/NewSlider';
import HomeContainer from '../general/HomeContainer';
import hanImg from '../../assets/hanorg.png';
//import HomeContent from '../general/HomeContent';



function index() {
    return (
        <div className="bg-gradient-to-r from-red-200 to-blue-200">
       <Zoom>
      <NewSlider />
      <HomeContainer/>
      {/* <HomeContent/> */}
       </Zoom>
        
    </div>
    )
}

export default index
