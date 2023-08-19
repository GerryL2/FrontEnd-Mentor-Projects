import React, {useState} from "react"
import Logo from "./images/logo.svg"
import Close from "./images/icon-close.svg"
import Hamburger from "./images/icon-hamburger.svg"

export default function Header() {
    const [hamClose, setHamClose] = useState(false)

    function toggleSideBar() {
        setHamClose(prevShown => !prevShown)
        console.log("clicked")
      }

    return(
        <div>
            <div className="flex items-center justify-between lg:gap-72 lg:w-5/6 w-11/12 m-auto py-12 relative">
                <img src={Logo} alt="" className="cursor-pointer"/>
                <div>
                    <ul className="text-Dark-Blue text-xs lg:flex hidden gap-5 font-medium">
                        <li className="cursor-pointer hover:text-Dark-Grayish-Blue">Pricing</li>
                        <li className="cursor-pointer hover:text-Dark-Grayish-Blue">Product</li>
                        <li className="cursor-pointer hover:text-Dark-Grayish-Blue">About Us</li>
                        <li className="cursor-pointer hover:text-Dark-Grayish-Blue">Careers</li>
                        <li className="cursor-pointer hover:text-Dark-Grayish-Blue">Community</li>
                    </ul>
                </div>
                <button className="bg-Bright-Red text-White rounded-full shadow-lg px-7 py-3 text-xs font-medium lg:block hidden hover:bg-opacity-40">Get Started</button>
                <div className="lg:hidden block">
                    {hamClose ? <img src={Close} onClick={toggleSideBar}/> : <img src={Hamburger} onClick={toggleSideBar}/>}

                </div>
                
            </div>
            {hamClose ? 
            <div className="text-center w-11/12 ms-5 rounded-md bg-White absolute shadow-cxl">
                <ul className="font-bold text-lg text-Dark-Blue flex flex-col gap-5 py-10">
                    <li>Pricing</li>
                    <li>Product</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Community</li>
                </ul>
            </div> 
            : ""}
        </div>
    )
}