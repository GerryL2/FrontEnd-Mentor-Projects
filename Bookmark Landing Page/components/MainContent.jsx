import React, {useState} from "react"
import Dots from "./images/bg-dots.svg"
import Arrow from "./images/icon-arrow.svg"
import Error from "./images/icon-error.svg"
import Facebook from "./images/icon-facebook.svg"
import Twitter from "./images/icon-twitter.svg"
import TabOne from "./images/illustration-features-tab-1.svg"
import TabTwo from "./images/illustration-features-tab-2.svg"
import TabThree from "./images/illustration-features-tab-3.svg"
import Hero from "./images/illustration-hero.svg"
import Chrome from "./images/logo-chrome.svg"
import Firefox from "./images/logo-firefox.svg"
import Opera from "./images/logo-opera.svg"
import FootBookmark from "./images/logo-footer-bookmark.svg"



export default function MainContent(props) {

    const [focusedButton, setFocusedButton] = useState(1);
    const [focusedQuestion, setFocusedQuestion] = useState(1)
    const [emailInput, setEmailInput] = useState({
        email: ""
    })

    const [errorShown, setErrorShown] = useState(true)

    const handleButtonFocus = (buttonIndex) => {
      setFocusedButton(buttonIndex);
    };

    const handleQuestionFocus = (focusIndex) => {
        setFocusedQuestion(focusIndex)
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


    const handleButtonClick = () => {
        if (emailInput.email === "") {
            setErrorShown(true);
        } else {
            setErrorShown(false);
        }
    };


    return(
        <div>
            <div className="relative flex w-10/12 mx-auto mt-20 items-center md:flex-row flex-col">
                <div className="basis-1/2 flex flex-col gap-8 md:mt-0 mt-12 md:order-first order-last md:text-start text-center">
                    <h1 className="md:text-5xl text-4xl font-medium text-Very-Dark-Blue leading-tight">A Simple Bookmark Manager</h1>
                    <p className="text-Grayish-Blue max-w-md">A clean and simple interface to organize your favourite
                        websites. Open a new browser tab and see your sites load
                        instantly. Try it for free.
                    </p>
                    <div className="basis-1/2">
                        <button className="hover:bg-White hover:text-Soft-Blue hover:border-2 hover:border-Soft-Blue shadow-md bg-Soft-Blue text-White text-sm px-4 py-2 mr-5 rounded-md">Get it on Chrome</button>
                        <button className="hover:bg-White hover:text-Very-Dark-Blue hover:border-2 hover:border-b-Very-Dark-Blue bg-Grey text-sm text-Grayish-Blue font-normal shadow-md px-4 py-2 rounded-md">Get it on Firefox</button>
                    </div>
                </div>
                <div className="md:order-last order-first">
                    <img src={Hero} alt="" className="md:scale-110"/>
                </div>
                <div className="absolute bg-Soft-Blue md:w-2/4 md:h-72 h-64 md:mt-56 mt-10 w-5/6 -z-50 md:-right-40 -right-20 rounded-bl-Custom"></div>
            </div>
            <div className="mt-48">
                <div className="text-center">
                    <h2 className="font-medium text-Very-Dark-Blue text-3xl mb-6">Features</h2>
                    <p className="text-Grayish-Blue md:max-w-lg max-w-sm m-auto mb-12">Our aim is to make it quick and easy for you to access your favourite websites. 
                        Your bookmarks sync between your devices so you can access them on the go
                    </p>
                </div>
                <div className="md:flex justify-center items-center flex-col w-10/12 m-auto">
                    <div className="">
                        <button
                        className={`md:pb-8 py-4 md:py-0 md:px-14 px-28 transition hover:text-Soft-Red ${
                            focusedButton === 1 ? 'text-Very-Dark-Blue border-b-4 border-Soft-Red' : 'text-Grayish-Blue md:border-b md:border-y-0 hover:Soft-Red border-y border-Grayish-Blue'
                        }`}
                        onFocus={() => handleButtonFocus(1)}
                        >
                        Simple Bookmarking
                        </button>
                        <button
                        className={`md:pb-8 py-4 md:py-0 md:px-14 px-28 transition hover:text-Soft-Red ${
                            focusedButton === 2 ? 'text-Very-Dark-Blue border-b-4 border-Soft-Red' : 'text-Grayish-Blue md:border-b md:border-y-0 hover:Soft-Red border-y border-Grayish-Blue'
                        }`}
                        onFocus={() => handleButtonFocus(2)}
                        >
                        Speedy Searching
                        </button>
                        <button
                        className={`md:pb-8 py-4 md:py-0 md:px-14 px-36 transition hover:text-Soft-Red ${
                            focusedButton === 3 ? 'text-Very-Dark-Blue border-b-4 border-Soft-Red' : 'text-Grayish-Blue md:border-b md:border-y-0 hover:Soft-Red border-y border-Grayish-Blue'
                        }`}
                        onFocus={() => handleButtonFocus(3)}
                        >
                        Easy Sharing
                        </button>
                    </div>
                </div>
                <div className="mt-20 w-10/12 m-auto relative">
                    {focusedButton === 1 ? <div className="md:flex gap-16 items-center flex-col md:flex-row">
                    <img src={TabOne} alt="" />
                    <div className="md:ml-28 text-center md:text-start">
                        <h2 className="font-medium text-Very-Dark-Blue text-3xl mb-5 md:mt-0 mt-24">Bookmark in one click</h2>
                        <p className="text-Grayish-Blue max-w-sm mb-5">Organize your bookmarks however you like.
                            Our simple drag-and-drop interface gives you
                            complete control over how you manage your favourite sites.
                        </p>
                        <button className="bg-Soft-Blue text-White px-4 py-2 rounded-md md:block hidden">More info</button>
                    </div> </div>: ""                      
                    }
                    {focusedButton === 2 ? <div className="md:flex gap-16 items-center flex-col md:flex-row">
                    <img src={TabTwo} alt="" className="md:ml-12"/>
                    <div className="md:ml-28 text-center md:text-start">
                        <h2 className="font-medium text-Very-Dark-Blue text-3xl mb-5 md:mt-0 mt-24">Intelligent search</h2>
                        <p className="text-Grayish-Blue max-w-sm mb-5">
                            Our powerful search feature will help you find saved
                            sites in no time at all. No need to trawl through all of
                            your bookmarks.
                        </p>
                        <button className="bg-Soft-Blue text-White px-4 py-2 rounded-md md:block hidden">More info</button>
                    </div> </div>: ""                      
                    }
                    {focusedButton === 3 ? <div className="md:flex gap-16 items-center flex-col md:flex-row">
                    <img src={TabThree} alt="" className="md:ml-20"/>
                    <div className="md:ml-28 text-center md:text-start">
                        <h2 className="font-medium text-Very-Dark-Blue text-3xl mb-5 md:mt-0 mt-24">Share your bookmarks</h2>
                        <p className="text-Grayish-Blue max-w-sm mb-5">
                            Easily share your bookmarks and collections with
                            others. Create a shareable link that you can at
                            the click of a button.
                        </p>
                        <button className="bg-Soft-Blue text-White px-4 py-2 rounded-md md:block hidden">More info</button>
                    </div> </div>: ""                      
                    }
                    <div className="absolute bg-Soft-Blue md:top-32 top-11 md:w-2/4 md:h-72 h-64   w-full -z-50 md:-left-40 -left-20 rounded-br-Custom"></div>
                </div>
            </div>
            <div className="mt-44 text-center">
                <div>
                    <h2 className="font-medium text-Very-Dark-Blue text-3xl mb-6">Download the extension</h2>
                    <p className="text-Grayish-Blue mb-8 md:w-1/3 w-8/12 m-auto ">
                        We've got more browsers in the pipeline. Please do let 
                        us know if you've got a favourite you'd like us to prioritize.
                    </p>
                </div>
                <div className="md:flex md:flex-row flex-col md:gap-5 text-center items-center justify-center">
                    <div className="flex flex-col justify-center items-center shadow-lg gap-5  rounded-md md:w-fit w-3/5 md:m-0 m-auto">
                        <img src={Chrome} alt="" className="w-1/3 mt-11"/>
                        <h3 className="text-Very-Dark-Blue">Add to Chrome</h3>
                        <p className="text-Grayish-Blue text-sm">Minimum version 62</p>
                        <img src={Dots} alt="" />
                        <button className="bg-Soft-Blue text-White px-6 py-2 hover:bg-White hover:text-Soft-Blue hover:border-2 hover:border-Soft-Blue rounded-md mb-7">Add & Install Extension</button>
                    </div>
                    <div className="flex flex-col justify-center items-center shadow-lg gap-5 md:mt-24 mt-7 rounded-md md:w-fit w-3/5 md:m-0 m-auto">
                        <img src={Firefox} alt="" className="w-1/3 mt-11"/>
                        <h3 className="text-Very-Dark-Blue">Add to Firefox</h3>
                        <p className="text-Grayish-Blue text-sm">Minimum version 55</p>
                        <img src={Dots} alt="" />
                        <button className="bg-Soft-Blue text-White px-6 py-2 hover:bg-White hover:text-Soft-Blue hover:border-2 hover:border-Soft-Blue rounded-md mb-7">Add & Install Extension</button>

                    </div>
                    <div className="flex flex-col justify-center items-center shadow-lg gap-5 md:mt-36 mt-7  rounded-md md:w-fit w-3/5 md:m-0 m-auto">
                        <img src={Opera} alt="" className="w-1/3 mt-11"/>
                        <h3 className="text-Very-Dark-Blue">Add to Opera</h3>
                        <p className="text-Grayish-Blue text-sm">Minimum version 46</p>
                        <img src={Dots} alt="" />
                        <button className="bg-Soft-Blue text-White px-6 py-2 hover:bg-White hover:text-Soft-Blue hover:border-2 hover:border-Soft-Blue rounded-md mb-7">Add & Install Extension</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center mt-28">
                <div>
                    <h2 className="font-medium text-Very-Dark-Blue text-3xl mb-6 text-center w-3/5 m-auto">Frequently Asked Questions</h2>
                    <p className="text-Grayish-Blue mb-8 md:w-2/3 w-8/12 m-auto text-center ">Here are some of our FAQs. If you have any other questions you'd 
                        like answered please feel free to email us.
                    </p>
                </div>
                <div>
                <div className="flex flex-col justify-center items-center">
                    <div className="border-y-0 border-b md:border-y hover:Soft-Red border-Grayish-Blue md:w-Nine w-Ten">
                        <button
                            className={`md:pb-4 py-4 md:py-4 md:px-14 px-28 transition flex items-center md:-ms-14 -ms-28 hover:text-Soft-Red`}
                            onFocus={() => handleQuestionFocus(1)}
                            onBlur={() => handleQuestionFocus(1)}
                            >
                            What is Bookmark?
                            <img src={Arrow} alt="" className={`md:ms-64 ms-32 ${focusedQuestion == 1 ? 'rotate-180' : 'rotate-0'}`}/>
                        </button>
                        {focusedQuestion === 1 ? <div >
                            <p className="text-Grayish-Blue text-sm mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                            justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                            </p>
                        </div> : ""}
                    </div>
                    <div className="border-y-0 border-b  hover:Soft-Red border-Grayish-Blue md:w-Nine w-Ten">
                        <button
                            className={`md:pb-4 py-4 md:py-4 md:px-14 px-20 transition flex items-center  md:-ms-14 -ms-20 justify-between hover:text-Soft-Red `}
                            onFocus={() => handleQuestionFocus(2)}
                            onBlur={() => handleQuestionFocus(2)}

                            >
                            How can I request a new browser?
                            <img src={Arrow} alt="" className={`md:ms-36 ms-12 ${focusedQuestion == 2 ? 'rotate-180' : 'rotate-0'}`}/>
                        </button>
                        {focusedQuestion === 2 ? <div>
                            <p className="text-Grayish-Blue text-sm mb-5">
                            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
                            Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
                            ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                            Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                            </p>
                        </div> : ""}
                    </div>
                    <div className="border-y-0 border-b  hover:Soft-Red border-Grayish-Blue md:w-Nine w-Ten">
                        <button
                            className={`md:pb-4 py-4 md:py-4 md:px-14 px-32 transition flex items-center md:-ms-14 -ms-32 hover:text-Soft-Red`}
                            onFocus={() => handleQuestionFocus(3)}
                            onBlur={() => handleQuestionFocus(3)}

                            >
                            Is there a mobile app?
                            <img src={Arrow} alt="" className={`md:ms-60 ms-20 ${focusedQuestion == 3 ? 'rotate-180' : 'rotate-0'}`}/>
                        </button>
                        {focusedQuestion === 3 ? <div>
                            <p className="text-Grayish-Blue text-sm mb-5">
                            Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
                            urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
                            sollicitudin ex et ultricies bibendum.
                            </p>
                        </div> : ""}
                    </div>
                    <div className="border-y-0 border-b  hover:Soft-Red border-Grayish-Blue md:w-Nine w-Ten">
                        <button
                            className={`md:pb-4 py-4 md:py-4 md:px-14 px-30 transition flex items-center md:-ms-14 hover:text-Soft-Red`}
                            onFocus={() => handleQuestionFocus(4)}
                            onBlur={() => handleQuestionFocus(4)}

                            >
                            What about other Chromium browsers?
                            <img src={Arrow} alt="" className={`md:ms-28 ms-16 ${focusedQuestion == 4 ? 'rotate-180' : 'rotate-0'}`}/>
                        </button>
                        {focusedQuestion === 4 ? <div>
                            <p className="text-Grayish-Blue text-sm mb-5">
                            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
                            vitae neque eget nisl gravida pellentesque non ut velit.
                            </p>
                        </div> : ""}
                    </div>
                    </div>
                </div>
                <button className="bg-Soft-Blue text-White px-4 py-2 rounded-md ">More info</button>
            </div>
            <div className="bg-Soft-Blue flex justify-center items-center flex-col py-8 gap-10 mt-28">
                <h3 className="uppercase tracking-widest text-White">35,000+ Already Joined</h3>
                <h2 className="text-White font-medium md:text-3xl text-2xl md:w-full w-3/5 text-center">Stay up-to-date with what we're doing</h2>
                <div className="flex md:flex-row flex-col gap-11 items-center">
                    <div className="relative">
                        <input type="email"
                        name="email"
                        className={`relative rounded-md pr-24 pl-4 py-3 text-sm outline-none ${errorShown ? 'border-Soft-Red border-2' : ""}`}
                        placeholder="Enter your email address"
                        onChange={toggle}
                        value={emailInput.email}
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" 
                        required
                        />
                        {errorShown ? <img src={Error} alt="Error Img" className="absolute top-4 right-4"/>: ""}
                        {errorShown ? <p className="bg-Soft-Red rounded-sm text-xs font-medium pl-4 py-1 text-White italic">Whoops, make sure it's an email</p> : ""}
                    </div>
                    <div>
                        <button onClick={handleButtonClick} className="bg-Soft-Red text-White px-5 py-3 rounded-md text-sm hover:bg-White hover:text-Soft-Red hover:border-Soft-Red hover:border-2">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
            <footer className="bg-Very-Dark-Blue flex md:flex-row flex-col justify-between text-White items-center py-8 px-24 gap-8">
                <div className="flex md:gap-24 md:flex-row flex-col items-center gap-8">
                    <img src={FootBookmark} alt="Bookmark Icon"  className="cursor-pointer"/>

                    <ul className="uppercase tracking-widest flex md:gap-5 md:flex-row flex-col gap-5">
                        <li className="hover:text-Soft-Red cursor-pointer">Features</li>
                        <li className="hover:text-Soft-Red cursor-pointer">Pricing</li>
                        <li className="hover:text-Soft-Red cursor-pointer">Contact</li>
                    </ul>
                </div>
                <div className="flex gap-8 items-center justify-center bottom-5 ">
                    <img src={Facebook} alt="Facebook Icon " className="cursor-pointer svg-icon"/>
                    <img src={Twitter} alt="Twitter Icon" className="cursor-pointer svg-icon"/>
                </div>
            </footer>
        </div>
    )
}