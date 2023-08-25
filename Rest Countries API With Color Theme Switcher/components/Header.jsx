import React, {useEffect} from "react"
import Moon from "./images/night-mode.png"
import { Link } from "react-router-dom"

export default function Header({toggleMode, colorMode}) {

    useEffect(() => {
        document.body.className = colorMode ? 'black' : 'light';
      }, [colorMode]);
    return(
        <header className="nav" >
            <h1><a href="/">Where in the world?</a></h1> 
            <div onClick={toggleMode}>
                <img src={Moon} alt="Moon png" />
                <h3>{colorMode ? "Light Mode" : "Dark Mode"}</h3>
            </div>
        </header>
    )
}