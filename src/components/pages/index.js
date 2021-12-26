import React from 'react';
//import Hero from '../general/Hero';
//import Content from '../general/Content';
import Zoom from 'react-reveal/Zoom';
import NewSlider from '../general/NewSlider';
import HomeContainer from '../general/HomeContainer';
//import HomeContent from '../general/HomeContent';



function index() {
    return (
        <>
       <Zoom>
      <NewSlider />
      <HomeContainer/>
      {/* <HomeContent/> */}
       </Zoom>
        
    </>
    )
}

export default index
