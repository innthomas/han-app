import React,{useState,useEffect} from 'react';
import Header from './components/general/Header';
import Dropdown from './components/general/Dropdown';
import Footer from './components/general/Footer';
import {Route,Routes} from 'react-router-dom';
import Home from './components/pages/';
import About from './components/pages/About';
import Donate from './components/pages/Donate';
import Join from './components/pages/Join';

import Affiliates from './components/pages/Affiliates';
import News from './components/pages/News';

import ContactUs from './components/pages/ContactUs';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  useEffect(() => {
    const hideMenu =()=>{
      if(window.innerWidth>768 && isOpen){
        setIsOpen(false);
      }
    }
    window.addEventListener('resize',hideMenu);
    return () => window.removeEventListener('resize',hideMenu);});
  
  
    
  return (
   
    <>
     <Header toggle={toggle}/>
     <Dropdown isOpen={isOpen} toggle={toggle}/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        
        <Route path="/affiliates" element={<Affiliates/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/donate" element={<Donate/>}/>
     </Routes>
     <Footer/>
    </>
    
  );
}

export default App;