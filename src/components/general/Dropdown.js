import React from 'react';
import {Link} from 'react-router-dom';

function Dropdown({isOpen, toggle, children}) {
    return (
        <div className={isOpen?"grid grid-rows-4 text-center items-center bg-yellow-400":"hidden"} onClick={toggle}>
                <Link className="p-4" to='/'>Home</Link>
                <Link className="p-4" to='/about'>About</Link>
                <Link className="p-4" to='/donate'>Donate</Link>
                <Link className="p-4" to='/contact'>Contact Us</Link>
                
                <Link className="p-4" to='/news'>News</Link>
                <Link className="p-4" to='/affiliates'>Affiliates</Link>
                
            </div>
    )
}

export default Dropdown
