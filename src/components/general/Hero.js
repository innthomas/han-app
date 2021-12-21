import React from 'react';
import donateIcon from '../../assets/money-bag.svg';
import {Link} from 'react-router-dom';

function Hero() {
    return (
        <div className="bg-white h-screen flex flex-col justify-center items-center">
        <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
            Humanism
        </h1>
        <Link to='/' className="py-6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-green-300 transition duration-300 ease-in-out flex items-center animate-bounce">Donate 
        <img src={donateIcon} alt="egg" className="h-10 rounded mx-2"/>
        </Link>

    </div>
    )
}

export default Hero
