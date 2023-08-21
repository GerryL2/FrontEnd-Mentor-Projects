import React from "react"

export default function Details({
    logo,
    company,
    recent,
    featured,
    position,
    postedAt,
    contract,
    location,
    languages,
    tools,
    filter_f
}) {

    function handleFilter(skill){
        filter_f(skill)
    }

    const Skills =({skill}) => (<div className="tag rounded-md py-1 px-2 m-2 bg-Light-Grayer-Cyan hover:bg-Desaturated-Dark-Cyan hover:text-White">
        <button onClick={ () => handleFilter(skill)}>
            {skill}
        </button>
    </div>)
    return(
        <main>
            <section>
                <div className="flex gap-5 items-center lg:flex-row flex-col">
                    <div className="flex gap-5 items-center relative">
                        <img src={logo} alt="Company logo" className="md:w-24 w-12 md:relative absolute md:top-0 -top-10"/>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-3">
                                <p className="text-Desaturated-Dark-Cyan font-bold">{company}</p>
                                {recent ? <p className="text-White bg-Desaturated-Dark-Cyan rounded-full px-2 py-1 font-bold uppercase text-xs">New</p>: null}
                                {featured ? <p className="text-White bg-Very-Dark-Grayish-Cyan rounded-full px-2 py-1 font-bold uppercase text-xs">featured</p>: null}
                            </div>
                            <h1 className="text-Very-Dark-Grayish-Cyan font-bold cursor-pointer hover:text-Desaturated-Dark-Cyan">{position}</h1>
                            <div className="flex gap-5 text-Dark-Grayish-Cyan font-medium">
                                <p>{postedAt}</p>
                                <p>{contract}</p>
                                <p>{location}</p>
                            </div>
                        </div>
                    </div>
                    <hr className="md:hidden block md:w-0 w-full"/>
                    <div className="flex justify-center text-Desaturated-Dark-Cyan rounded-sm font-bold gap-2 text-sm">
                        {[...languages, ...tools].map( skill => <Skills skill={skill} key={skill}/>)}
                    </div>
                </div>
            </section>
            
        </main>
    )
}