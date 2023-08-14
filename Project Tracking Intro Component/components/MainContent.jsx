import React from "react"

export default function MainContent(props) {
    return(
        <div className="md:ml-32 mt-20 md:mt-20 z-10 flex flex-col md:flex-row">
            <div className="flex gap-7 mt-20 flex-col md:order-first order-last p-9 w-full md:w-full"> 
                <h2 className="text-Grayish-Blue uppercase tracking-widest font-Barlow"><span className="bg-Very-Dark-Blue text-White px-2 py-1 rounded-full tracking-normal font-bold mr-2">New</span> Monograph Dashboard</h2>
                <h1 className="md:text-5xl uppercase font-bold font-Barlow-condensed text-Very-Dark-Blue md:w-11/12 w-full text-4xl">Powerful Insights Into your team</h1>
                <p className="text-Dark-Grayish-Blue md:mb-10 md:w-64">Project planning and time tracking for agile teams</p>
                <div className="uppercase text-White flex items-center gap-5">
                    <button className="text-white bg-Red uppercase py-3 px-7 rounded-md font-bold font-Barlow">Schedule a demo</button>
                    <p className="text-Grayish-Blue tracking-widest font-Barlow w-1/4 md:w-1/2">To see a preview</p>
                </div>
            </div>
            <div className="w-full relative md:order-last order-first">
                <img src={props.Devices} alt="Devices" className="relative scale-150 -right-32 md:scale-125 md:top-10 md:-right-48 md:absolute"/>
            </div>
        </div>
    )
}