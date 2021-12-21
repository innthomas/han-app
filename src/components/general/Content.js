import React from 'react';
import imageOne from '../../assets/han.png';
import imageTwo from '../../assets/hanorg.png';

function Content() {
    return (
        <>
         <div className="menu-card">
            <img src={imageOne} alt="egg" className="h-full rounded mb-20" />
            <div className="content-center">
               <h2 className="text-2xl mb-2">Humanist Logo</h2>
               <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
               <span>$16</span>

            </div>
        </div>
        <div className="menu-card">
            <img src={imageTwo} alt="egg" className="h-full rounded mb-20" />
            <div className="content-center">
               <h2 className="text-2xl mb-2">Humanist Organization</h2>
               <p className="mb-2">Lorem ipsum dolor sit amet consectetur.</p>
               <span>$56</span>

            </div>
        </div>
        </>
    )
}

export default Content
