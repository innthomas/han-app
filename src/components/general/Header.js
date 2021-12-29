import React from 'react';
import LoginButton from '../HeaderButtons/LoginButton';
//import AboutButton from '../HeaderButtons/AboutButton';
//import { useAlert } from 'react-alert'
import './Header.css';
//import hanBanner from '../../assets/hanbanner1.png';

import {Link} from 'react-router-dom';
//import ukLogo from '../../assets/uk-logos/huk_logo.png';
import twitterLogo from '../../assets/uk-logos/huk_twitter.png';
import youtubeLogo from '../../assets/uk-logos/huk_youtube.png';
import IGLogo from '../../assets/uk-logos/huk_insta.png';
import fbLogo from '../../assets/uk-logos/huk_fb.png';

//headlessui
import { Menu } from '@headlessui/react'



function Header({isOpen, toggle, children}) {
   // const alert = useAlert();
    return (
        <>
        <div className="">
            <nav className="m-4 flex justify-between items-center h-16 bg-grey-800 text-black relative shadow-sm font-mono role='navigation' ">
                <div className="">
                <Link to='/'>
                    <h1 className="font-sans md:font-serif hover:font-serif myheadertracking-tight hover:tracking-wide font-semibold text-lg sm:text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-red-600" >
                    Humanists Association of Nigeria</h1>
                    </Link></div>
                <div className="flex items-center">
                <Link className="p-4" to='/donate'><button className="visible md:invisible rounded-md px-2 py-1 bg-green-500 transition duration-300 ease-in-out flex items-center animate-bounce hover:bg-green-300 text-white" 
                >Donate</button></Link>
                    <button className="md:hidden bg-transparent hover:bg-gray-100 text-gray-800 font-semibold hover:text-gray-600 py-2 px-4 border border-gray-400 hover:border-transparent rounded" onClick={toggle}>
                        {isOpen ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> : <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>}
                        
                    </button>
                    <LoginButton className=" mx-3 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"/>
                   
                    
                    <img className="md:block hidden mx-3 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={youtubeLogo} alt="youtube logo"/>
                    <img className="md:block hidden mx-3 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={twitterLogo} alt="twitter logo"/>
                    <img className="md:block hidden mx-3 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={fbLogo} alt="facebook logo"/>
                    <img className="md:block hidden mx-3 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={IGLogo } alt="IG logo"/>
                </div>


            </nav>
        <nav className="hidden md:flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono role='navigation' mx-5">
           
          
           
        
                <Link className="p-4" to='/'><button className='py-2 px-4 text-white rounded-md bg-green-500 animate-bounce hover:bg-green-300 focus:border-4 focus:border-red-400'>Home</button></Link>
                <Link className="
                 p-2 rounded-lg  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 focus:border-4 focus:border-red-400
                " to='/about'>
                About
                    </Link>
               
                <Link className=" p-2 rounded-lg  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 focus:border-4 focus:border-red-400" to='/news'>News</Link>
                <Link className="p-2 rounded-lg  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 focus:border-4 focus:border-red-400" to='/faq'>FAQ</Link>
                <Link className="p-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 focus:border-4 focus:border-red-400" to='/contact'>ContactUs</Link>
                <Link className="p-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 focus:border-4 focus:border-red-400" to='/gallery'>Gallery</Link>
                <Link className="p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 focus:border-4 focus:border-red-400 rounded-lg" to='/local'>LocalGroup</Link>
                <Link className="p-4" to='/join'>
                    <div className="group relative">
                    <button className='focus:border-4 focus:border-red-400 py-2 px-4 text-white rounded-md bg-green-500 hover:bg-green-300 '>Join</button>
                    <ul className="hidden group-hover:block z-40 bg-transparent">
                        <li className="hover:bg-green-200 mx-0 py-2">item 1</li>
                        <li className="hover:bg-green-200 mx-0 py-2">item 2</li>
                        <li className="hover:bg-green-200 mx-0 py-2">item 3</li>
                        <li className="hover:bg-green-200 mx-0 py-2">item 4</li>
                    </ul>
                    </div>
                    </Link>
                <Link className="p-4" to='/donate'><button className="focus:border-4 focus:border-red-400 rounded-md p-2 bg-yellow-600 transition duration-300 ease-in-out flex items-center animate-bounce hover:bg-green-300 text-white active:bg-red-500"
                >Donate</button></Link>

                
               
                
           
        </nav>
        </div>
        </>
    )
}

export default Header
