import React, { useEffect, useState } from "react";
import './App.scss';
import Dice from "./images/icon-dice.svg"
import Divider from "./images/pattern-divider-desktop.svg"

function App() {
    const [advice, setAdvice] = useState({});
    const [rotation, setRotation] = useState(0);

    useEffect(function() {
        fetch("https://api.adviceslip.com/advice/1")
            .then(res => res.json())
            .then(data => setAdvice(data.slip))
            .catch(error => console.error("Error fetching advice:", error));
    }, []);

    function newAdvice() {
        fetch("https://api.adviceslip.com/advice")
            .then(res => res.json())
            .then(data => setAdvice(data.slip))
            .catch(error => console.error("Error fetching advice:", error));

        setRotation(rotation + 45);
    }

    return (
        <div className="App--container">
            <p className="advice-id">Advice #{JSON.stringify(advice.id)}</p>
            <p className="advice-advice">{JSON.stringify(advice.advice)}</p>
            <img className="divider" src={Divider} alt="Divider" />
            <button onClick={newAdvice}>
                <img src={Dice} alt="Dice" style={{ transform: `rotate(${rotation}deg)` }} />
            </button>
        </div>
    );
}

export default App;

{props.countries.map((country, index) => (
    <p key={index}>
        {country.name.common}: {country.population?.toLocaleString()}
    </p>
))}
