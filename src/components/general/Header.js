import React from 'react';
//import hanBanner from '../../assets/hanbanner1.png';
import {Link} from 'react-router-dom';
import ukLogo from '../../assets/uk-logos/huk_logo.png';
import twitterLogo from '../../assets/uk-logos/huk_twitter.png';
import youtubeLogo from '../../assets/uk-logos/huk_youtube.png';
import IGLogo from '../../assets/uk-logos/huk_insta.png';
import fbLogo from '../../assets/uk-logos/huk_fb.png';



function Header({isOpen, toggle, children}) {
    return (
        <>
        <div className="">
            <nav className="m-4 flex justify-between items-center h-16 bg-grey-800 text-black relative shadow-sm font-mono role='navigation' ">
                <div className="">
                <Link to='/'><img src={ukLogo} alt="uk logo" className='cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' /></Link></div>
                <div className="flex items-center">
                <Link className="p-4" to='/donate'><button className="visible md:invisible rounded-md px-2 py-1 bg-green-500 transition duration-300 ease-in-out flex items-center animate-bounce hover:bg-green-300 text-white"
                >Donate</button></Link>
                    <button className="md:hidden bg-transparent hover:bg-gray-100 text-gray-800 font-semibold hover:text-gray-600 py-2 px-4 border border-gray-400 hover:border-transparent rounded" onClick={toggle}>
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                    <span className="md:block hidden mx-3 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" >Login</span>
                    
                    <img className="md:block hidden mx-3 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={youtubeLogo} alt="youtube logo"/>
                    <img className="md:block hidden mx-3 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={twitterLogo} alt="twitter logo"/>
                    <img className="md:block hidden mx-3 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={fbLogo} alt="facebook logo"/>
                    <img className="md:block hidden mx-3 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={IGLogo } alt="IG logo"/>
                </div>


            </nav>
        <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono role='navigation' md:visible invisible mx-5">
           
          
           
        
                <Link className="p-4" to='/'><button className='py-2 px-4 text-white rounded-md bg-green-500 animate-bounce hover:bg-green-300'>Home</button></Link>
                <Link className="p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" to='/about'>About</Link>
               
                <Link className="p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" to='/news'>News</Link>
                <Link className="p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" to='/affiliates'>Affiliates</Link>
                <Link className="p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" to='/contact'>ContactUs</Link>
            
                <Link className="p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" to='/local'>LocalGroup</Link>
                <Link className="p-4" to='/join'><button className='py-2 px-4 text-white rounded-md bg-green-500 hover:bg-green-300'>Join</button></Link>
                <Link className="p-4" to='/donate'><button className="rounded-md p-2 bg-yellow-600 transition duration-300 ease-in-out flex items-center animate-bounce hover:bg-green-300 text-white"
                >Donate</button></Link>

                
               
                
           
        </nav>
        </div>
        </>
    )
}

export default Header
