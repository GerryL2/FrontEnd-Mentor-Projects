import { useState, useEffect } from "react"
import IntroD from "./images/image-intro-desktop.jpg"
import IntroM from "./images/image-intro-mobile.jpg"
import Process from "./images/icon-snappy-process.svg"
import Prices from "./images/icon-affordable-prices.svg"
import People from "./images/icon-people-first.svg"
import IntroLeftD from "./images/bg-pattern-intro-left-desktop.svg"
import IntroLeftM from "./images/bg-pattern-intro-left-mobile.svg"
import IntroRightD from "./images/bg-pattern-intro-right-desktop.svg"
import IntroRightM from "./images/bg-pattern-intro-right-mobile.svg"
import HowD from "./images/bg-pattern-how-we-work-desktop.svg"
import HowM from "./images/bg-pattern-how-we-work-mobile.svg"



export default function MainContent() {
    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 639
    const secondBreakPoint = 639
    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleResizeWindow)
        return () => {
            window.removeEventListener("resize", handleResizeWindow)
        }
    }, [])


    return(
        <main className="">
            <div className="bg-svgg">
                <div className="bg-Dark-Violet sm:text-start text-center flex sm:flex-row flex-col sm:h-[601px] sm:max-w-[100%] md:overflow-visible sm:overflow-hidden">
                    <div className="z-10">
                        {width > secondBreakPoint ?
                        <img src={IntroLeftD} alt="Intro Background pattern Desktop" className="absolute z-10 top-[50%]"/> :
                        <img src={IntroLeftM} alt="Intro Background pattern Mobile" className="absolute z-0 top-[62.2%]"/>
                        }
                    </div>
                    <div className="sm:order-1 order-2 flex sm:flex-auto flex-col gap-7 sm:py-0 py-20 sm:mx-[12rem] mx-6 sm:max-w-[40%] sm:mt-[8%]">
                        {width > breakpoint ?
                        <div className="h-0 border w-[10rem] mb-10 border-white "></div> :
                        null
                        }
                        <h1 className="font-DM text-white sm:text-[4.9rem] text-[2.7rem] font-medium sm:leading-[4rem] leading-10">Humanizing your insurance.</h1>
                        <p className="font-Karla text-Very-Light-Gray">Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.</p>
                        <button className="hover:bg-white bg-transparent border border-white text-white hover:text-Dark-Violet font-medium px-6 py-2 self-center sm:self-start">VIEW PLANS</button>
                    </div>
                    <div className="sm:order-2 order-1 z-10">
                        {width > breakpoint ?
                        <img src={IntroD} alt="" className="xl:max-w-[33.6875rem] xl:max-h-[40.6875rem]  z-20  mt-[7rem]"/> :
                        <img src={IntroM} alt="" className="max-w-[100%] w-[100vw] max-h-[100%] z-20"/>
                        }
                    </div>
                </div>
                <div className="">
                    {width > secondBreakPoint ?
                    <img src={IntroRightD} alt="Intro Background pattern Desktop" className="absolute z-10 right-0 top-[4.7rem]"/> :
                    <img src={IntroRightM} alt="Intro Background pattern Mobile" className="absolute top-[52rem] right-0 z-10"/>
                    }
                </div>
                <div className="w-11/12 sm:max-w-[80%] mx-auto my-[8rem] sm:mt-[20rem]">
                    <div className="h-0 border-[1px] sm:mx-0  mx-auto border-[#a68fbb] w-[10rem] mb-10"></div>
                    <h1 className="text-Very-Dark-Violet font-DM text-[2.7rem] sm:text-start text-center mb-[5rem]">We're different</h1>
                    <div className="sm:text-start text-center flex sm:flex-row flex-col gap-10 justify-center items-center sm:mb-[12rem]">
                        <div className="flex flex-col sm:items-start items-center gap-3">
                            <img src={Process} alt="" />
                            <h3 className="font-DM text-[1.4rem] sm:text-3xl">Snappy Process</h3>
                            <p className="text-Dark-Grayish-Violet text-[1rem] sm:max-w-[73.2%] max-w-[80%] font-Karla font-medium">Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.</p>
                        </div>
                        <div className="flex flex-col sm:items-start items-center gap-3">
                            <img src={Prices} alt="" />
                            <h3 className="font-DM text-[1.4rem] sm:text-3xl">Affordable Prices</h3>
                            <p className="text-Dark-Grayish-Violet text-[1rem] sm:max-w-[73.2%] max-w-[80%] font-Karla font-medium">We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
                        </div>
                        <div className="flex flex-col sm:items-start items-center gap-3">
                            <img src={People} alt="" />
                            <h3 className="font-DM text-[1.4rem] sm:text-3xl">People First</h3>
                            <p className="text-Dark-Grayish-Violet text-[1rem] sm:max-w-[73.2%] max-w-[80%] font-Karla font-medium">Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.</p>
                        </div>
                    </div>
                    <div className="bg-Dark-Violet sm:flex-row flex flex-col sm:justify-between justify-center  items-center px-10 py-[5rem] gap-10 mt-16 find-out relative overflow-hidden">
                        {width > secondBreakPoint ?
                        <img src={HowD} alt="How Background pattern Desktop" className="absolute z-10 right-0"/> :
                        <img src={HowM} alt="How Background pattern Mobile" className="absolute right-0 top-0 -z-10"/>
                        }
                        <h1 className="text-white font-DM text-[2.8rem] sm:max-w-[27%] sm:text-start text-center leading-10 z-50">Find out more about how we work</h1>
                        <button className="border border-white text-white px-4 py-2 hover:bg-white hover:text-Very-Dark-Violet curosr-pointer z-10 font-semibold">HOW WE WORK</button>
                    </div>
                </div>
            </div>
        </main>
    )
}