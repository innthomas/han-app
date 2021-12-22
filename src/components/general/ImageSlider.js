import React,{useState} from 'react';
import { ImageSliderData } from './ImageSliderData';
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa';
import '../../App.css';


function ImageSlider({slides}) {
    const [current,setCurrent]= useState(0);
    const length = slides.length;
    const nextSlide = ()=>{
        setCurrent(current=== length-1? 0:current + 1)
    }
    const prevSlide = ()=>{
        setCurrent(current=== 0? length-1:current-1)
    }
    console.log(current)
    if(!Array.isArray(slides)|| slides.length <= 0){
        return null;
    }
    return (
        <div className="slider">
              <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
          
        {ImageSliderData.map((item, index) => {
            return (
                <div 
                className={index ===current?"slide active":"slide"} key={index}
                // className="h-screen flex justify-center items-center bg-cyan-300"
                >
                    {index === current&&( <img src={item.image} alt="img" className="image"/>)}
                   
                </div>
            )
        }
        )}
        </div>
    )
}

export default ImageSlider
