'use client'
import React from 'react'
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'], // choose your desired weights
  style: ['normal', 'italic'], // optional, default includes 'normal'
  subsets: ['latin'],          // choose your subsets; latin covers most use-cases
  display: 'swap',             // optional, controls font loading strategy
});


const Navbar = () => {
  return (
    <div className={`text-white flex justify-around mt-4 ${playfair.className}`}>
      <h2 className=' tracking-widest  font-bold'>ThreadSnatch</h2>

      <div className='bg-white w-8 border  rounded-full  flex justify-center '>
        <button className='text-black cursor-pointer text-xl'>☰</button>
      </div>
    </div>
  )
}

export default Navbar
