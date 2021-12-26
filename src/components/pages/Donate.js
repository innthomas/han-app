import React from 'react'

function Donate() {
    return (
    
        <div className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  h-screen flex justify-center items-center ">
        <h1 className="text-9xl uppercase font-black">
            Donate Page
        </h1>
        <div class="p-4">
    <div class="group relative">
        <button class="bg-gray-800 text-white px-6 h-10 rounded">Menü</button>
        <nav tabindex="0" class="border-2 bg-white invisible border-gray-800 rounded w-60 absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
            <ul class="py-1">
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Edit
                    </a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Delete
                    </a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Reply
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>
       






    </div>
    
    

    )
}

export default Donate
