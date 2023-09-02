import React, {useState} from 'react'
import MobileHeader from "./images/mobile/image-header.jpg"
import DesktopHeader from "./images/desktop/image-header.jpg"
import { Squash as Hamburger } from 'hamburger-react'
import {BsArrowDown} from 'react-icons/bs'
import DownArrow from './images/icon-arrow-down.svg'



const Header = () => {
  const [show, setShow] = useState(false)

  const ShowSidebar = () => {
    setShow(!show)
    console.log(show)
  }
  return (
    <div>
        <header className='bg-[#3EBFFF] flex items-center justify-between md:p-8 p-4 fixed w-full z-50'>
            <div className=''>
                <h2 className='font-extrabold text-white md:text-3xl text-2xl cursor-pointer'>sunnyside</h2>
            </div>
            <div className='ms-auto md:block hidden'>
              <ul className='flex items-center gap-12 text-white font-semibold'>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Services</li>
                <li className='cursor-pointer'>Projects</li>
                <li className='cursor-pointer text-Dark-Blue rounded-full bg-white uppercase hover:text-white hover:bg-opacity-20 px-6 py-4 font-Fraunces mr-5'>Contact</li>
              </ul>
            </div>
            <div className='md:hidden block' onClick={ShowSidebar}>
              <Hamburger color='#FFF' size={30} />
            </div>
        </header>
        <div className=''>
          <div className='relative'>
            {show ?
            <div className=''>
              <div className='bg-white text-center py-10 absolute top-[20%] w-11/12 mx-[1rem] z-50 md:hidden '>
                <ul className='flex flex-col items-center gap-5 text-Dark-grayish-blue font-semibold'>
                  <li className='cursor-pointer'>About</li>
                  <li className='cursor-pointer'>Services</li>
                  <li className='cursor-pointer'>Projects</li>
                  <li className='cursor-pointer text-Dark-Blue rounded-full bg-Yellow uppercase hover:text-white  px-6 py-4 font-Fraunces'>Contact</li>
                </ul>
              </div>
            </div> 
            : ""
            }
            <h1 className='font-Fraunces text-white h-10 w-18 text-center border-black absolute mx-auto top-[20%] left-1/2 transform -translate-x-1/2 md:text-[2rem] tracking-[.7rem] lg:text-[4rem] z-50 text-[2.3rem]'>WE ARE CREATIVES</h1>
            <a href="#section1"><img src={DownArrow} alt="" className='absolute md:top-[45%] top-[50%] left-1/2 transform -translate-x-1/2'/></a>
            <img src={DesktopHeader} alt="" className='md:block hidden -z-50'/>
            <img src={MobileHeader} alt="" className='md:hidden block'/>
          </div>
        </div>
    </div>
  )
}

export default Header