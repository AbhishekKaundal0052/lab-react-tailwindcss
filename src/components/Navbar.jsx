import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-red-400 h-20 w-50 flex justify-between text-white p-5">
        <div className="flex flex-row justify-evenly justify-items-center w-96 text-gray-500">
          <button className='text-xl font-bold text-white'>Kalvium</button>
          <button>About Us</button>
          <button>Contacts</button>
          <button>Courses</button>
        </div>
        <button className='border w-20 rounded-md'>Login</button>
      </nav>
  )
}

