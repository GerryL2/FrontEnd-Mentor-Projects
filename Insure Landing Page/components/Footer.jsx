import { useState, useEffect } from "react"
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaPinterest } from "react-icons/fa"
import FooterD from "./images/bg-pattern-footer-desktop.svg"
import FooterM from "./images/bg-pattern-footer-mobile.svg"
import Logo from "./images/logo.svg"

export default function Footer() {
    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 639
    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleResizeWindow)
        return () => {
            window.removeEventListener("resize", handleResizeWindow)
        }
    }, [])

    return(
        <footer className="bg-Very-Light-Gray font-Karla">
            <div className="z-0">
                {width > breakpoint ?
                <img src={FooterD} alt="Footer Background Desktop"  className="absolute z-0"/> :
                <img src={FooterM} alt="Footer Background Mobile" className="absolute z-0"/>
                }
            </div>
            <div className="py-20 sm:max-w-[80%] sm:mx-auto z-50">
                <div className="flex sm:flex-row flex-col  sm:justify-between justify-center items-center gap-8 z-50">
                    <img src={Logo} alt="Insure Logo" className="cursor-pointer z-50"/>
                    <div className="flex gap-5">
                        <FaFacebook size={30} color="#837d87" className="hover:fill-[black] cursor-pointer"/>
                        <FaTwitter size={30} color="#837d87" className="hover:fill-[black] cursor-pointer"/>
                        <FaPinterest size={30} color="#837d87" className="hover:fill-[black] cursor-pointer"/>
                        <FaInstagram size={30} color="#837d87" className="hover:fill-[black] cursor-pointer"/>
                    </div>
                </div>
                <hr className="my-5"/>
                <div className="sm:text-start text-center font-semibold flex sm:flex-row flex-col sm:gap-[15%] gap-5 z-50">
                    <div className="z-50">
                        <p className="text-Dark-Grayish-Violet  mb-6 tracking-wider">OUR COMPANY</p>
                        <ul>
                            <li className="hover:underline">HOW WE WORK</li>
                            <li className="hover:underline">WHY INSURE?</li>
                            <li className="hover:underline">CHECK PRICE</li>
                            <li className="hover:underline">REVIEWS</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-Dark-Grayish-Violet  mb-6 tracking-wider">HELP ME</p>
                        <ul>
                            <li className="hover:underline">FAQ</li>
                            <li className="hover:underline">TERMS OF USE</li>
                            <li className="hover:underline">PRIVACY POLICY</li>
                            <li className="hover:underline">COOKIES</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-Dark-Grayish-Violet  mb-6 tracking-wider">CONTACT</p>
                        <ul>
                            <li className="hover:underline">SALES</li>
                            <li className="hover:underline">SUPPORT</li>
                            <li className="hover:underline">LIVE CHAT</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-Dark-Grayish-Violet mb-6 tracking-wider">OTHERS</p>
                        <ul>
                            <li className="hover:underline">CAREERS</li>
                            <li className="hover:underline">PRESS</li>
                            <li className="hover:underline">LICENSES</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}