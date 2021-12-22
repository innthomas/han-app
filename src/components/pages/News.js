import React from 'react';
import ImageSlider from '../general/ImageSlider';
import {ImageSliderData} from '../general/ImageSliderData';

function News() {
    return (
        <div 
        // className="h-screen flex justify-center items-center bg-cyan-300"
        >
            <ImageSlider slides={ImageSliderData}/>
        {/* <h1 className="text-9xl uppercase font-black">
            News Page
        </h1> */}

    </div>
    )
}

export default News
