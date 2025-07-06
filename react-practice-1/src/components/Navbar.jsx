import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-white h-14  border-b shadow-lg' >
        <div className='container mx-auto flex justify-between items-center h-full px-4'>
            <h1 className='text-green-600 font-bold text-2xl' >Dhanush.</h1>
            <ul className='flex items-center  gap-5 cursor-pointer ' >
                <li className=' hover:font-bold hover:text-green-600' >Home</li>
                <li className=' hover:font-bold hover:text-green-600' >About</li>
                <li className=' hover:font-bold hover:text-green-600' >Testimonial</li>
                <li className=' hover:font-bold hover:text-green-600' >Contact</li>
            </ul>
            <button className='px-4 py-2 bg-green-600 hover:bg-green-700 cursor-pointer  rounded text-white'>Login</button>
        </div>
    </div>
  )
}

export default Navbar
