import React from 'react';
import wip3 from '../../assets/under-construction/giphy.webp';
//import makeCarousel from 'react-reveal/makeCarousel';
// we'll need the Slide component for sliding animations
// but you can use any other effect
//import Slide from 'react-reveal/Slide';
// we'll use styled components for this tutorial
// but you can use any other styling options ( like plain old css )
//import styled, { css } from 'styled-components';

function Join() {
//     const Container = styled.div`
//   border: 1px solid red;
//   position: relative;
//   overflow: hidden;
//   width: 300px;
//   height: 150px;
// `;
// const CarouselUI = ({ children }) => <Container>{children}</Container>;
// const Carousel = makeCarousel(CarouselUI);
    return (
      <div className="bg-gradient-to-r from-red-200 to-blue-200 h-screen flex flex-col items-center">
            <h1 className="py-4">coming soon!</h1>
        <img alt="gallery" class="inset-0 w-200 h-200 object-cover object-center" src={wip3}/>
       
  
    </div>
  //       <div>
  //           <Carousel defaultWait={1000} /*wait for 1000 milliseconds*/ >
  //   <Slide right>
  //     <div>
  //       <h1>Slide 1</h1>
  //       <p>Slide Description</p>
  //     </div>
  //   </Slide>
  //   <Slide right>
  //     <div>
  //       <h1>Slide 2</h1>
  //       <p>Slide Description</p>
  //     </div>
  //   </Slide>
  // </Carousel>
  
            
  //       </div>
    )
}

export default Join
