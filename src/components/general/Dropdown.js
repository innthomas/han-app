import React from 'react';
import {Link} from 'react-router-dom';

function Dropdown({isOpen, toggle, children}) {
    return (
        <div className={isOpen?"grid grid-rows-4 text-center items-center rounded-lg bg-teal-200":"hidden"} onClick={toggle}>
                <Link className="p-4 hover:bg-teal-50 " to='/'>Home</Link>
                <Link className="p-4 hover:bg-teal-50" to='/about'>About</Link>
                <Link className="p-4 hover:bg-teal-50" to='/news'>News</Link>
                <Link className="p-4 hover:bg-teal-50" to='/donate'>Donate</Link>
                <Link className="p-4 hover:bg-teal-50" to='/contact'>Contact Us</Link>
                <Link className="p-4 hover:bg-teal-50" to='/affiliates'>Affiliates</Link>
                <Link className="p-4 hover:bg-teal-50" to='/join'>Join</Link>
                
            </div>
    )
}

export default Dropdown
