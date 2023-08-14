import React from "react"

export default function Header(props) {



    return(
        <div className="max-w-7xl md:m-auto z-10 ml-12">
            <header className="flex justify-between items-center font-Barlow font-bold text-sm pt-12">
                <img src={props.Logo} alt="Website Logo" />
                <div className="md:block hidden">
                    <ul className="text-Very-Dark-Blue flex gap-4 uppercase">
                        <li><a href="">Product</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">Pricing </a></li>
                        <li><a href="" className="text-Grayish-Blue">•</a></li>
                        <li><a href="" className="text-Grayish-Blue">Login</a></li>
                    </ul>
                </div>
                <img src={props.Hamburger} alt="" className="md:hidden block mr-7" onClick={props.toggleSideBar}/>
            </header>
        </div>
    )
}