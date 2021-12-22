import React from 'react';

const featuredProducts =[
    require('../../assets/images/download.jpeg'),
    require('../../assets/images/im21.jpeg'),
    require('../../assets/images/images.jpeg'),
    require('../../assets/images/images.png'),
    require('../../assets/images/img23.jpeg')

];

export default function Slider(){
    return <div className="w-full relative select-none">
        <div className="aspect-w-16 aspect-h-9">
        <img src={featuredProducts[1]} alt="img" />
        </div>
      
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
            <button>Previous</button>
            <button>Next</button>
        </div>
    </div>
}