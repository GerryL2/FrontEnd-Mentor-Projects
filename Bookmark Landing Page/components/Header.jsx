import React from "react"
import Bookmark from "./images/logo-bookmark.svg"
import Hamburger from "./images/icon-hamburger.svg"
import Close from "./images/icon-close.svg"
import Twitter from "./images/icon-twitter.svg"
import Facebook from "./images/icon-facebook.svg"
import WhiteBookmark from "./images/logo-white-bookmark.svg"

export default function Header(props) {
    return(
        <div className="relative">
            <div className="">
                <header className="uppercase flex items-center justify-between md:pt-11 md:px-32 pt-8 px-7">
                    <img src={Bookmark} alt="Bookmark logo" className="cursor-pointer"/>
                    <div className="">
                        <ul className="hidden gap-8 items-center text-sm text-Very-Dark-Blue md:flex tracking-widest">
                            <li className="cursor-pointer hover:text-Soft-Red">Features</li>
                            <li className="cursor-pointer hover:text-Soft-Red">Pricing</li>
                            <li className="cursor-pointer hover:text-Soft-Red">Contact</li>
                            <button className="bg-Soft-Red py-2 px-6 rounded uppercase text-White hover:text-Soft-Red hover:bg-White hover:border-2 ">Login</button>
                        </ul>
                        <img src={Hamburger} alt="Hamburger icon" onClick={props.SideBar} className="md:hidden block"/>
                    </div>
                </header>
            </div>
            {props.shown ?
            <div className="absolute bg-Very-Dark-Blue opacity-95 text-center uppercase w-full h-screen px-8 top-0 tracking-widest text-lg z-50">
                <div className="flex justify-between items-center py-8">
                    <img src={WhiteBookmark} alt="Sidebar bookmark logo" className="fill-White" />
                    <img src={Close} alt="Close icon" onClick={props.SideBar}/>
                </div>
                <ul className="flex flex-col text-White">
                    <li className="border-y-2 py-3 border-Grayish-Blue">Features</li>
                    <li className="border-b-2 py-3 border-Grayish-Blue">Pricing</li>
                    <li className="border-b-2 py-3 border-Grayish-Blue">Contact</li>
                    <button className="py-2 my-5 rounded-md border-2 border-White uppercase tracking-widest">Login</button>
                </ul>
                <div className="flex gap-8 items-center justify-center absolute bottom-5 start-36">
                    <img src={Facebook} alt="Twitter Icon" />
                    <img src={Twitter} alt="Facebook Icon" />
                </div>
            </div>: ""}
        </div>

    )
}