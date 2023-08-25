import React from "react";
import {Link} from "react-router-dom"

export default function Country(props) {
    return (
        <div className="country--container">
            {props.countries.map((country, index) => (
                <section className="country-box tilt-in-fwd-tr" key={index} onClick={() => props.toggle(country.name.common)}>
                    <img src={country.flags.svg} alt="Country Flag"/>
                    <div className="country-text">
                        <h2>{country.name.common}</h2>
                        <p><span>Population:</span> {country.population.toLocaleString()}</p>
                        <p><span>Region:</span> {country.region}</p>
                        <p><span>Capital:</span> {country.capital}</p>
                    </div>
                    <Link to={`/chosencountry/${encodeURIComponent(country.name.common)}`}>
                        <button>Learn more</button>
                    </Link>
                </section>
            ))}
        </div>
    );
}