import React from "react"
import Image from "./Image"
import Details from "./Details"

export default function JobContent({listing, filtering}) {
    const rules = `bg-White ${listing.featured ? "border-l-4 border-l-Desaturated-Dark-Cyan" : ""} bg-White gap-5 flex flex-row  items-center w-5/6 m-auto p-5 rounded-md shadow-lg `
    return(
        <div className={rules}>
            <Details
                logo={listing.logo}
                company={listing.company}
                recent={listing.new}
                featured={listing.featured}
                position={listing.position}
                postedAt={listing.postedAt}
                contract={listing.contract}
                location={listing.location}
                languages={listing.languages}
                tools={listing.tools}
                filter_f={filtering}
            />
        </div>
    )
}

