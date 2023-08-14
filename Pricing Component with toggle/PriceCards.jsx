import React from "react"

export default function PriceCards(props) {
    return(
        <div className="md:gap-0 gap-6 flex md:flex-row flex-col text-center z-50 md:ms-80 items-center">
            <div className="bg-White p-2 w-72 h-fit rounded-lg cursor-pointer">
                <h3 className="mt-5 text-Grayish-Blue">Basic</h3>
                <h1 className="text-5xl mt-3 mb-3">{props.monthYear ? "$199.99" : "$19.99"}</h1>
                <div className="text-Grayish-Blue flex flex-col gap-5 p-5 text-xs">
                    <p className="border-y py-3">500 Storage</p>
                    <p className="border-b pt- pb-3">2 Users Allowed</p>
                    <p className="border-b pt- pb-3">Send up to 3GB</p>
                    <button className="uppercase text-White bg-gradient-to-r from-[#a3a8f0] to-[#696fdd] text-xs px-10 py-2 mt-3 rounded-md hover:border-2 hover:border-Black hover:text-[#696fdd] hover:bg-White">Learn More</button>
                </div>
            </div>
            <div className="bg-gradient-to-b from-[#a3a8f0] to-[#696fdd] text-White p-2 w-72 h-96 rounded-lg cursor-pointer">
                <h3 className="mt-5">Professional</h3>
                <h1 className="text-5xl mt-3 mb-3">{props.monthYear ? "$249.99" : "$24.99"}</h1>
                <div className="flex flex-col gap-5 p-5 text-xs">
                    <p className="border-y py-3">1 TB Storage</p>
                    <p className="border-b pt- pb-3">5 Users Allowed</p>
                    <p className="border-b pt- pb-3">Send up to 10GB</p>
                    <button className="uppercase bg-White text-[#696fdd] text-xs px-10 py-2 mt-3 rounded-md hover:bg-[#696fdd] hover:border-2 hover:text-White hover:border-White">Learn More</button>
                </div>
            </div>
            <div className="bg-White p-2 w-72 h-fit rounded-lg cursor-pointer">
                <h3 className="mt-5 text-Grayish-Blue">Master</h3>
                <h1 className="text-5xl mt-3 mb-3">{props.monthYear ? "$399.99" : "$39.99"}</h1>
                <div className="text-Grayish-Blue flex flex-col gap-5 p-5 text-xs">
                    <p className="border-y py-3">2 TB Storage</p>
                    <p className="border-b pt- pb-3">10 Users Allowed</p>
                    <p className="border-b pt- pb-3">Send up to 20GB</p>
                    <button className="uppercase text-White bg-gradient-to-r from-[#a3a8f0] to-[#696fdd] text-xs px-10 py-2 mt-3 rounded-md hover:border-2 hover:text-[#696fdd] hover:border-Black hover:bg-[#ffffff]">Learn More</button>
                </div>
            </div>
        </div>
    )
}