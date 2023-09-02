import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaPinterest} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className='flex flex-col gap-10 justify-center items-center py-10 bg-[#A1DCCE] '>
        <h1 className='font-extrabold text-Dark-Desaturated-Cyan md:text-3xl text-2xl cursor-pointer'>sunnyside</h1>
        <ul className='text-Dark-Desaturated-Cyan flex gap-5 md:mb-10 text-lg'>
            <li className='cursor-pointer hover:text-white'>About</li>
            <li className='cursor-pointer hover:text-white'>Services</li>
            <li className='cursor-pointer hover:text-white'>Projects</li>
        </ul>
        <div className='flex gap-7'>
            <FaFacebookSquare color='hsl(167, 40%, 24%)' size={30} className='cursor-pointer iconhover'/>
            <FaInstagram color='hsl(167, 40%, 24%)' size={30} className='cursor-pointer iconhover'/>
            <FaTwitter color='hsl(167, 40%, 24%)' size={30} className='cursor-pointer iconhover'/>
            <FaPinterest color='hsl(167, 40%, 24%)' size={30} className='cursor-pointer iconhover' />
        </div>
    </footer>
  )
}

export default Footer