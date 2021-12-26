import React from 'react';
// import twitterLogo from '../../assets/uk-logos/huk_twitter.png';
// import youtubeLogo from '../../assets/uk-logos/huk_youtube.png';
// import IGLogo from '../../assets/uk-logos/huk_insta.png';
// import fbLogo from '../../assets/uk-logos/huk_fb.png';

function Footer() {
    return (
        <div className="relative-bottom clear-both bottom-0 left-0 flex flex-col md:flex-row justify-evenly items-center h-16 bg-stone-200 text-black mt-4">
           
            
            <div>
  	<form className="m-4 flex ">
    	<input className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="your@mail.com"/>
		<button class="px-4 rounded-r-lg bg-black-400  text-gray-600 font-bold p-4 uppercase border-stone-500 border-t border-b border-r ">Subscribe</button>
	</form>
</div>
            
            <div>
            <p>copyright @ 2021 HAN All Rights Reserved. </p>
                </div>
        </div>
    )
}

export default Footer
