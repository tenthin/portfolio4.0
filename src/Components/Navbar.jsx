import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='flex items-center justify-between w-3/5 m-auto mb-20'>
        <h1 className='logo text-5xl cursor-pointer'>TENZIN.DEV</h1>
        <ul className='flex gap-5 text-xl'>
          <li className='cursor-pointer p-3 rounded-lg text-stone-500	 hover:bg-black hover:text-white hover:shadow'>Home</li>
          <li className='cursor-pointer p-3 rounded-lg text-stone-500	 hover:bg-black hover:text-white hover:shadow'>About me</li>
          <li className='cursor-pointer p-3 rounded-lg text-stone-500	 hover:bg-black hover:text-white hover:shadow'>Skills</li>
          <li className='cursor-pointer p-3 rounded-lg text-stone-500	 hover:bg-black hover:text-white hover:shadow'>Projects</li>
          <li className='cursor-pointer p-3 rounded-lg text-stone-500	 hover:bg-black hover:text-white hover:shadow'>Contact</li>
        </ul>
      </div>
    </>
  )
}

export default Navbar