import React from "react";

export default function Alert() {
  return (
    <>
      <div className="text-white bg-blue-500 flex justify-center w-40 h-14 ml-64 m-4 rounded">
        <button className="font-bold p-2">Button One</button>
      </div>
      <div className="flex justify-center m-5">
        <div className="bg-red-200 w-9/12 text-red-700 border-red-700 border-solid border-2 p-5 rounded">
          <span className="font-bold">Alert!</span> This is Awesome!
        </div>
      </div>
      <div className='flex justify-center m-8'>
      <div className='text-center shadow-2xl rounded-md flex flex-row'>
      <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" className='h-10 m-3' />
      <div>
        <h1 className='m-3'>Kalvium Store</h1>
        <h2 className='text-gray-500 m-3'>You have a new Courses</h2>
        </div>
      </div>
    </div>
      <footer className="bg-gray-200 w-full h-10 flex justify-center text-gray-500 text-lg absolute bottom-0">
        <span className="m-2">@2021 Copyright:<span className="font-bold">Kalvium</span></span>
      </footer>
    </>
  )
}
