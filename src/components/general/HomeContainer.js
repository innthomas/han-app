import React from 'react';
import MyContainer from './MyContainer';
import Featured from './Featured';
//import im1 from '../../assets/images/download.jpeg';

function HomeContainer() {
    return (
        <div className="container mx-auto relative ">
          <Featured/>
            <main className="py-12 md:px-20 sm:px-14 px-6">
  <div className="sm:flex items-center shadow-md">
    <div className="md:px-10 sm:px-5">
      <h1 className="text-gray-800 font-bold text-2xl my-2">long established</h1>
      <p className="text-gray-700 mb-2 md:mb-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
      <div className="flex justify-between mb-2">
        <span className="font-thin text-sm">May 20th 2020</span>
        <span className="sm:block hidden mb-2 text-gray-800 font-bold">Read more</span>
      </div>
    </div>
    <div>
      <img className="bg-cover" src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
    </div>
  </div>
  <div className="mt-6 md:flex space-x-6">
    <div>
      <img src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt=""/>
      <div>
        <h1  className="mt-3 text-gray-800 text-2xl font-bold my-2">long established</h1>
        <p className="text-gray-700 mb-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
        <div className="flex justify-between mt-4">
          <span className="font-thin text-sm">May 20th 2020</span>
          <span className="mb-2 text-gray-800 font-bold">Read more</span>
        </div>
      </div>
    </div>
    <div>
      <img src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt=""/>
      <div>
        <h1  className="mt-3 text-gray-800 text-2xl font-bold my-2">long established</h1>
        <p className="text-gray-700 mb-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
        <div className="flex justify-between mt-4">
          <span className="font-thin text-sm">May 20th 2020</span>
          <span className="mb-2 text-gray-800 font-bold">Read more</span>
        </div>
      </div>
    </div>
    <div>
      <img src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt=""/>
      <div>
        <h1  className="mt-3 text-gray-800 text-2xl font-bold my-2">long established</h1>
        <p className="text-gray-700 mb-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
        <div className="flex justify-between mt-4">
          <span className="font-thin text-sm">May 20th 2020</span>
          <span className="mb-2 text-gray-800 font-bold">Read more</span>
        </div>
      </div>
    </div>
  </div>
  <div></div>
</main>

     <MyContainer/>
        </div>
    )
}

export default HomeContainer
