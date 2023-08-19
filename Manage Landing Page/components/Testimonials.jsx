import React, {useState} from "react"
import Ali from "./images/avatar-ali.png"
import Anisha from "./images/avatar-anisha.png"
import Richard from "./images/avatar-richard.png"
import Shanai from "./images/avatar-shanai.png"

export default function Testimonials() {
    const [testBox, setTestBox] = useState(1)
    const [focusTest, setFocusTest] = useState(1)

    const showBox = (showIndex) =>  {
        setTestBox(showIndex)
    }

    const TestimonialFocus = (focusIndex) => {
        setFocusTest(focusIndex)
    }



    return(
        <div>
            <section className="flex flex-col gap-8 overflow-x-hidden items-center justify-center">
                <h2 className="text-Dark-Blue text-4xl font-bold lg:mb-10">What they've said</h2>
                <div className="flex gap-9 text-sm">
                    {focusTest === 1 ?                     
                    <div className="flex flex-col items-center gap-5 bg-Very-Light-Gray relative py-16 px-5 text-center lg:w-Box w-full">
                        <img src={Anisha} alt="" className="rounded-full w-16 h-34 absolute -top-8" />
                        <h4 className="text-Dark-Blue font-semibold">Anisha Li</h4>
                        <p className="text-Dark-Grayish-Blue">
                            “We have been able to cancel so many other subscriptions since using 
                            Manage. There is no more cross-channel confusion and everyone is much 
                            more focused.”
                        </p>
                    </div> :                     
                    <div className="lg:flex flex-col items-center gap-5 bg-Very-Light-Gray relative py-16 px-5 text-center lg:w-Box w-full hidden">
                        <img src={Anisha} alt="" className="rounded-full w-16 h-34 absolute -top-8" />
                        <h4 className="text-Dark-Blue font-semibold">Anisha Li</h4>
                        <p className="text-Dark-Grayish-Blue">
                            “We have been able to cancel so many other subscriptions since using 
                            Manage. There is no more cross-channel confusion and everyone is much 
                            more focused.”
                        </p>
                    </div>}
                    {focusTest === 2 ?                     
                    <div className="flex flex-col items-center gap-5 bg-Very-Light-Gray relative py-16 px-5 text-center lg:w-Box w-full">
                        <img src={Ali} alt=""  className="rounded-full w-16 h-34 absolute -top-8"/>
                        <h4 className="text-Dark-Blue font-semibold">Ali Bravo</h4>
                        <p className="text-Dark-Grayish-Blue">
                            “We have been able to cancel so many other subscriptions since using 
                            Manage. There is no more cross-channel confusion and everyone is much 
                            more focused.”
                        </p>
                    </div>:  
                    <div className="lg:flex flex-col items-center gap-5 bg-Very-Light-Gray relative py-16 px-5 text-center lg:w-Box w-full hidden">
                        <img src={Ali} alt=""  className="rounded-full w-16 h-34 absolute -top-8"/>
                        <h4 className="text-Dark-Blue font-semibold">Ali Bravo</h4>
                        <p className="text-Dark-Grayish-Blue">
                            “We have been able to cancel so many other subscriptions since using 
                            Manage. There is no more cross-channel confusion and everyone is much 
                            more focused.”
                        </p>
                    </div>}
                    {focusTest === 3 ?                     
                    <div className="flex flex-col items-center gap-5 bg-Very-Light-Gray relative py-16 px-5 text-center lg:w-Box w-full">
                        <img src={Richard} alt=""  className="rounded-full w-16 h-34 absolute -top-8"/>
                        <h4 className="text-Dark-Blue font-semibold">Richard Watts</h4>
                        <p className="text-Dark-Grayish-Blue">
                            “Manage allows us to provide structure and process. It keeps us organized 
                            and focused. I can’t stop recommending them to everyone I talk to!”
                        </p>
                    </div>:                     
                    <div className="lg:flex flex-col items-center gap-5 bg-Very-Light-Gray relative py-16 px-5 text-center lg:w-Box w-full hidden">
                        <img src={Richard} alt=""  className="rounded-full w-16 h-34 absolute -top-8"/>
                        <h4 className="text-Dark-Blue font-semibold">Richard Watts</h4>
                        <p className="text-Dark-Grayish-Blue">
                            “Manage allows us to provide structure and process. It keeps us organized 
                            and focused. I can’t stop recommending them to everyone I talk to!”
                        </p>
                    </div>
                    
                    }
                    {focusTest === 4 ?                     
                    <div className="flex flex-col items-center gap-5 bg-Very-Light-Gray relative py-16 px-5 text-center  lg:w-Box w-full">
                        <img src={Shanai} alt=""  className="rounded-full w-16 h-34 absolute -top-8"/>
                        <h4 className="text-Dark-Blue font-semibold">Shanai Gough</h4>
                        <p className="text-Dark-Grayish-Blue">
                            “Their software allows us to track, manage and collaborate on our projects 
                            from anywhere. It keeps the whole team in-sync without being intrusive.”
                        </p>
                    </div> :                     
                    <div className="lg:flex flex-col items-center gap-5 bg-Very-Light-Gray relative py-16 px-5 text-center  lg:w-Box w-full hidden">
                        <img src={Shanai} alt=""  className="rounded-full w-16 h-34 absolute -top-8"/>
                        <h4 className="text-Dark-Blue font-semibold">Shanai Gough</h4>
                        <p className="text-Dark-Grayish-Blue">
                            “Their software allows us to track, manage and collaborate on our projects 
                            from anywhere. It keeps the whole team in-sync without being intrusive.”
                        </p>
                    </div>}
                </div>
                <div className="flex gap-3 lg:hidden ">
                    <button onClick={showBox} className={`
                        ${testBox === 1 ? "border border-Bright-Red rounded-full w-3 h-3 "
                        : "border border-Bright-Red rounded-full w-3 h-3 bg-Bright-Red" }`}
                        onFocus={() => TestimonialFocus(1)}
                        onblur={() => TestimonialFocus(1)}

                        >
                    </button>
                    <button onClick={showBox} className={`
                        ${testBox  === 2 ? "border border-Bright-Red rounded-full w-3 h-3 "
                        : "border border-Bright-Red rounded-full w-3 h-3 bg-Bright-Red" }`}
                        onFocus={() => TestimonialFocus(2)}
                        onblur={() => TestimonialFocus(2)}

                        >
                    </button>
                    <button onClick={showBox} className={`
                        ${testBox  === 3 ? "border border-Bright-Red rounded-full w-3 h-3 "
                        : "border border-Bright-Red rounded-full w-3 h-3 bg-Bright-Red" }`}
                        onFocus={() => TestimonialFocus(3)}
                        onblur={() => TestimonialFocus(3)}
                        >
                    </button>
                    <button onClick={showBox} className={`
                        ${testBox  === 4 ? "border border-Bright-Red rounded-full w-3 h-3 "
                        : "border border-Bright-Red rounded-full w-3 h-3 bg-Bright-Red" }`}
                        onFocus={() => TestimonialFocus(4)}
                        onblur={() => TestimonialFocus(4)}
                        >
                    </button>
                </div>
                <button className="bg-Bright-Red text-White rounded-full mx-auto lg:mx-0 shadow-lg px-7 py-3 text-sm font-medium hover:bg-opacity-40 ">Get Started</button>
            </section>
        </div>
    )
}