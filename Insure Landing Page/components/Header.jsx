import { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import { FaXbox } from 'react-icons/fa'
import Logo from './images/logo.svg'
import Close from "./images/icon-close.svg"


export default function Header() {
    const [sidebar, setSidebar] = useState(true)

    function showSidebar() {
        setSidebar(!sidebar)
        console.log(sidebar)
    }


    return (
        <div className='z-50'>
            <header className='flex justify-between items-center p-4 z-50 sm:max-w-[80%] sm:mx-auto'>
                <img src={Logo} alt="Insure Logo" />
                <ul className='sm:flex hidden gap-3 tracking-widest items-center'>
                    <li className='text-Dark-Grayish-Violet font-medium cursor-pointer'>HOW WE WORK</li>
                    <li className='text-Dark-Grayish-Violet font-medium cursor-pointer'>BLOG</li>
                    <li className='text-Dark-Grayish-Violet font-medium cursor-pointer'>ACCOUNT</li>
                    <button className='bg-transparent border-black px-4 py-2 text-black border font-medium tracking-widest cursor-pointer hover:text-white hover:bg-Very-Dark-Violet'>VIEW PLANS</button>
                </ul>
                <div className='border border-black sm:hidden block' onClick={showSidebar}>
                    {sidebar ? <FaBars size={20} className='m-2 cursor-pointer'/> : <img src={Close} alt='Close button' className='curosr-pointer'/>}
                </div>
                {sidebar ? '' : 
                <div className='bg-Very-Dark-Violet text-white absolute top-[8%] w-screen h-[80%] ml-[-16px] bg-svg slide-in-transition sm:hidden block z-50' >
                    <ul className='flex flex-col gap-10 text-center items-center justify-center mt-8 font-medium'>
                        <li className='tracking-widest'>HOW WE WORK</li>
                        <li className='tracking-widest'>BLOG</li>
                        <li className='tracking-widest'>ACCOUNT</li>
                        <button className='tracking-widest border-white border px-[6rem] py-3 '>VIEW PLANS</button>
                    </ul>
                </div>}
            </header>
        </div>
    )
}