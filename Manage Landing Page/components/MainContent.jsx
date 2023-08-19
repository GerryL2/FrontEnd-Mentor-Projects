import React, {useState} from "react"
import Pattern from "./images/bg-tablet-pattern.svg"
import Facebook from "./images/icon-facebook.svg"
import Instagram from "./images/icon-instagram.svg"
import Youtube from "./images/icon-youtube.svg"
import Pinterest from "./images/icon-pinterest.svg"
import Twitter from "./images/icon-twitter.svg"
import Logo from "./images/logo.svg"
import Illustration from "./images/illustration-intro.svg"
import Testimonials from "./Testimonials"


export default function MainContent() {

    const [emailInput, setEmailInput] = useState({
        email: ""
    })

    const [errorShown, setErrorShown] = useState(false)

    const showError = () => {
        setErrorShown(prevState => !prevState)
    } 

    function toggle(event) {
        event.preventDefault()
        const {name, value} = event.target

        setEmailInput(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }


    return(
        <div className="lg:bg-desktop bg-no-repeat bg-dp bg-sc">
            <section className="flex lg:flex-row flex-col items-center justify-between gap-28 lg:w-5/6 w-11/12 m-auto py-12">
                <div className="flex flex-col gap-10 lg:order-first order-last lg:text-start text-center lg:flex-1">
                    <h1 className="text-Dark-Blue lg:text-5xl text-4xl font-bold lg:w-10/12">
                        Bring everyone together to build
                        better products.
                    </h1>
                    <p className="text-Dark-Grayish-Blue lg:w-80">
                        Manage makes it simple for software teams
                        to plan day-to-day tasks while keeping the
                        larger team goals in view.
                    </p>
                    <button className="bg-Bright-Red text-White rounded-full mx-auto lg:mx-0 shadow-lg px-7 py-3 text-xs font-medium hover:bg-opacity-40 self-start">Get Started</button>
                </div>
                <div className="lg:flex-none">
                    <img src={Illustration} alt="" className="lg:order-last order-first max-w-full" />
                </div>  
            </section>
            <section className="flex lg:flex-row flex-col justify-between gap-28 lg:w-5/6 w-11/12 m-auto py-12">
                <div className="w-full lg:text-start text-center">
                    <h2 className="text-4xl text-Dark-Blue font-bold mb-5 lg:max-w-lg">What's different about Manage?</h2>
                    <p className="text-Dark-Grayish-Blue lg:w-80 text-sm">Manage provides all the functionality your 
                       team needs without the complexity. Our software is tailor made for modern digital
                        product teams.
                    </p>
                </div>
                <div className="flex flex-col gap-9 w-full">
                    <div>
                        <h3 className="text-Dark-Blue lg:bg-White bg-Soft-Red mb-5 lg:py-1 py-2 font-bold rounded-l-full text-sm"><span className="bg-Bright-Red font-semibold text-White full px-6 py-2 rounded-full lg:mr-5">01</span> Track company-wide progress</h3>
                        <p  className="text-Dark-Grayish-Blue lg:ml-20 lg:w-custom text-sm">
                            See how your day-to-day tasks hit into the wider vision.
                            Go from tracking progress at the milestone level all the
                            way down to the smallest detail. Never lose sight of the bigger picture again.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-Dark-Blue lg:bg-White bg-Soft-Red mb-5 font-bold lg:py-2 py-2 rounded-l-full text-sm"><span className="bg-Bright-Red text-White rounded-full px-6 py-2 lg:mr-5">02</span> Advanced built-in reports</h3>
                        <p className="text-Dark-Grayish-Blue lg:ml-20 lg:w-custom text-sm ">
                            Set internal delivery estimates and track progress toward
                            company goals. Our sutomisable dashboard helps you 
                            build out the reports you need to keep key stakeholders
                            informed.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-Dark-Blue lg:bg-White bg-Soft-Red mb-5 font-bold lg:py-2 py-2 rounded-l-full text-sm"><span className="bg-Bright-Red text-White rounded-full px-6 py-2 lg:mr-5">03</span> Everything you need in one place</h3>
                        <p className="text-Dark-Grayish-Blue lg:ml-20 lg:w-custom text-sm">
                            Stop jumping from one service to another to
                            communicate, store files, track tasks and share 
                            documents. Manage offers an all-in-one team 
                            productivity solution.
                        </p>
                    </div>
                </div>
            </section>
            <Testimonials />
            <section className="flex lg:flex-row flex-col lg:justify-between items-center bg-Bright-Red lg:bg-desksimp bg-no-repeat bg-mobilesimp text-White lg:px-24 px-4 lg:py-24 py-24 mt-24 lg:text-start text-center"> 
                <h2 className="text-4xl font-bold ">Simplify how your team works today.</h2>
                <button className="bg-White text-Bright-Red rounded-full px-8 py-4 text-xs hover:text-opacity-40 font-bold self-start lg:m-0 m-auto lg:mt-0 mt-5">Get Started</button>
            </section>
            <footer className="bg-Very-Dark-Blue lg:gap-0 gap-10 flex lg:flex-row flex-col lg:justify-evenly justify-center items-center lg:py-14 py-10 lg:text-start text-center">
                <div className="flex flex-col lg:gap-16 gap-10 lg:order-first order-last">
                    <img src={Logo} alt="" />
                    <div className="flex lg:gap-4 gap-8 lg:scale-100 scale-150">
                        <img src={Facebook} alt="" className="cursor-pointer"/>
                        <img src={Youtube} alt="" className="cursor-pointer"/>
                        <img src={Twitter} alt="" className="cursor-pointer"/>
                        <img src={Pinterest} alt="" className="cursor-pointer"/>
                        <img src={Instagram} alt="" className="cursor-pointer"/>
                    </div>
                </div>
                <div className="flex gap-44 text-White text-sm">
                    <ul className="flex flex-col gap-3">
                        <li className="hover:text-Bright-Red cursor-pointer">Home</li>
                        <li className="hover:text-Bright-Red cursor-pointer">Pricing</li>
                        <li className="hover:text-Bright-Red cursor-pointer">Products</li>
                        <li className="hover:text-Bright-Red cursor-pointer">About Us</li>
                    </ul>
                    <ul className="flex flex-col gap-3">
                        <li className="hover:text-Bright-Red cursor-pointer">Careers</li>
                        <li className="hover:text-Bright-Red cursor-pointer">Community</li>
                        <li className="hover:text-Bright-Red cursor-pointer">Privacy Policy</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-9 lg:order-last order-first">
                    <div className="flex gap-5 items-center">
                        <div>
                            <input type="email" 
                                name="email"
                                value={emailInput.email}
                                className={`rounded-full text-Dark-Grayish-Blue px-4 py-3 text-xs ${errorShown ? "border border-Bright-Red text-Bright-Red": "border-none text-Dark-Grayish-Blue" }`}
                                placeholder="Updates in your inbox..."
                                onChange={toggle}
                            />
                            {errorShown ? <p className="text-xs text-Red">Please insert a valid email</p>: ""}
                        </div>
                        <button onClick={showError} className="bg-Bright-Red rounded-full px-5 py-3 text-White text-xs "> Go</button>
                    </div>
                </div>
            </footer>
        </div>
    )
}