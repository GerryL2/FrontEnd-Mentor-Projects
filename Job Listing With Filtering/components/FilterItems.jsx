import React from "react"
import Remove from "./icon-remove.svg"

export default function FilterItems({item, clearItems}) {
    return(
        <div className="flex items-center rounded-md ">
            <span className="bg-White p-2 ml-5  rounded-l-lg bg-Light-Grayer-Cyan  text-Desaturated-Dark-Cyan font-bold text-xs">{item}</span>
            <img onClick={clearItems} src={Remove} alt="remove icon" className="w-8 p-2 bg-Light-Grayer-Cyan hover:bg-Very-Dark-Grayish-Cyan cursor-pointer rounded-r-lg"/>
        </div>
    )
}