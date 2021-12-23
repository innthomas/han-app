import React from 'react';
//import Hero from '../general/Hero';
//import Content from '../general/Content';
import Zoom from 'react-reveal/Zoom';
import NewSlider from '../general/NewSlider';
import HomeContainer from '../general/HomeContainer';

// import { Carousel } from 'react-responsive-carousel';
// import img1 from '../../assets/images/download.jpeg';
// import img2 from '../../assets/images/images.jpeg';
// import img3 from '../../assets/images/images.png';

function index() {
    return (
        <>
       <Zoom>
      <NewSlider/>
      <HomeContainer/>
       </Zoom>
        
    </>
    )
}

export default index
