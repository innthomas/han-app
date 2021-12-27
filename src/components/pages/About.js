import React from 'react';
//import './About.css';
import Zoom from 'react-reveal/Zoom';
//import NewSlider from '../general/NewSlider';

function About() {
    return (
      <Zoom>
     
     <div className="container mx-auto relative  flex flex-column">
       <div>
       <main>
              <div>

             
              <h1 className="sm:text-xl md:text-2xl text-green-500 p-2 font-bold">About us</h1>
              <h3 className="sm:text-lg md:text-xl text-blue-500 p-2 font-bold">Think for yourself, act for everyone</h3>
              <p className="p-2">At Humanists UK, we want a tolerant world where rational thinking and kindness prevail. We work to support lasting change for a better society, championing ideas for the one life we have.</p>
              <p className="p-2">We do this because we’re humanists, people who shape our own lives in the here and now, because we believe it’s the only life we get.</p>
              <p className="p-2">Our work helps people be happier and more fulfilled, and by bringing non-religious people together we help them develop their own views and an understanding of the world around them.</p>
              <p className="p-2">We’re committed to putting humanism into practice. Through our ceremonies, pastoral support, education services, and campaigning work, we advance free thinking and freedom of choice so everyone can live in a fair and equal society.</p>   
              </div>
                <div>
                <h3 className="sm:text-lg md:text-xl text-blue-500 p-2 font-bold">More about us</h3>
              <p className="p-2">We started out in 1896, and since then we’ve always been a growing movement at the forefront of social change. Today we’re trusted by over 100,000 members and supporters and over 70 local and special interest affiliates to promote humanism.</p>
              <p className="p-2">We put humanism into practice through effective campaigning and services, supporting lasting change for happier, more fulfilling lives. Our policies are informed with the support of over 150 of the UK’s most prominent philosophers, scientists, and other thinkers and experts and we seek to advance them with the help of over 100 parliamentarians in membership of the All Party Parliamentary Humanist Group. We bring like-minded people together to make change happen, and we strive to be their voice in public debate, drawing on contemporary humanist thought and the worldwide humanist tradition.</p>
              <p className="p-2">We’ve been conducting non-religious funerals, weddings, and baby-namings for 120 years. Our highly trained celebrants are the best you’ll find anywhere, and they support individuals to create authentic, bespoke ceremonies that put people and their stories at the heart of every occasion.</p>
              <p className="p-2">We also help vulnerable people easily access like-minded and effective non-religious pastoral support that is specially tailored to work for them. Our trained and accredited non-religious pastoral support volunteers operate across hospitals, prisons, and the armed forces.</p>  
              <p className="p-2">If you want to support us in our work, please do join or donate. We are dependent on charitable giving to continue our work.</p>  
              <p className="p-2">Humanists UK is the operating name of the British Humanist Association. We are a charitable company (no. 228781), formed in 1896 and incorporated in 1928, and registered in England and Wales. Our governing document is our Articles of Association, which can be viewed here.</p>  
              <p className="p-2">Our Safeguarding policy can be found <span className="text-blue-600">here</span>.</p>  
                </div>

            </main>
       </div>
       <div className="hidden md:block container bg-gray-200 m-2 p-4 rounded-lg">
         <section>
           <p className="pb-4">you are here: <span className="text-green-500">About Us</span></p>
           <h1 before="================" after="================"  className="text-2xl font-semi-bold before:content-[attr(before)] before:block after:content-[attr(after)] after:block ">More in this section</h1>
           <ul>
             <li className='py-1 cursor-pointer hover:bg-white'>Our Aims</li>
             <li className='py-1 cursor-pointer hover:bg-white'>Our Values</li>
             <li className='py-1 cursor-pointer hover:bg-white'>Our people</li>
             <li className='py-1 cursor-pointer hover:bg-white'>Vacancies</li>
             <li className='py-1 cursor-pointer hover:bg-white'>Our Affiliations</li>
             <li className='py-1 cursor-pointer hover:bg-white'>Our History since 1999</li>
             <li className='py-1 cursor-pointer hover:bg-white'>Humanists in the National Assembly</li>
             <li className='py-1 cursor-pointer hover:bg-white'>Lawyers for Humanism</li>
           </ul>
         </section>
         
         <section>
          
           <h1 before="--------------------------------" after="--------------------------------"  className="text-2xl font-semi-bold before:content-[attr(before)] before:block after:content-[attr(after)] after:block mt-4">Our Campaigns</h1>
           <ul className="">
             <li className="py-1 cursor-pointer hover:bg-white"> Faith schools</li>
             <li className="py-1 cursor-pointer hover:bg-white">Secularism</li>
             <li className="py-1 cursor-pointer hover:bg-white">Human rights and equality</li>
             <li className="py-1 cursor-pointer hover:bg-white">Humanist marriages</li>
             <li className="py-1 cursor-pointer hover:bg-white">Religious education</li>
             <li className="py-1 cursor-pointer hover:bg-white">Witchcraft persecutions</li>
             <li className="py-1 cursor-pointer hover:bg-white">Harmful superstitions</li>
             <li className="py-1 cursor-pointer hover:bg-white">Apostasy</li>
           </ul>
         </section>
         
           
           
       </div>
           
        </div>
     
       </Zoom>
        
       
        
     

       
    )
}

export default About
