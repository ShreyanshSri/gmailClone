import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between mx-3 h-16'>
        <div className='flex items-center gap-10'>
            <div className='flex items-center gap-2'>
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                <RxHamburgerMenu size={"20px"}/>
                </div>
                <img className='w-8' src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="gmail-logo" />
                <h1 className='text-2xl text-gray-500 font-medium'> Gmail</h1>
            </div>

        </div>

    </div>
  )
}

export default Navbar
