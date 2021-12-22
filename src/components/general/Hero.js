import React from 'react';
import donateIcon from '../../assets/money-bag.svg';
import {Link} from 'react-router-dom';
//import makeCarousel from 'react-reveal/makeCarousel';
// we'll need the Slide component for sliding animations
// but you can use any other effect
//import Slide from 'react-reveal/Slide';
// we'll use styled components for this tutorial
// but you can use any other styling options ( like plain old css )
//import styled, { css } from 'styled-components';



function Hero() {
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
        <>
        
        <div className="bg-white h-screen flex flex-col justify-center items-center">
        <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
            Humanism
        </h1>
        <Link to='/' className="py-6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-green-300 hover:shadow-green-500/60 transition duration-300 ease-in-out flex items-center animate-bounce shadow-xl shadow-yellow-500/60">Donate 
        <img src={donateIcon} alt="egg" className="h-10 rounded mx-2"/>
        </Link>

     

    </div>
    </>
    )
}

export default Hero
