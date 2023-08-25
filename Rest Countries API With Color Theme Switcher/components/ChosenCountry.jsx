import React from "react"
import Arrow from "./images/back.svg"
import { Link, useParams } from "react-router-dom";


export default function ChosenCountry(props) {
  const { countryName } = useParams();

  const selectedCountryInfo = props.selectedCountries.find(
    country => country.name.common === countryName
  );

  if (!selectedCountryInfo) {
    return <div>Country not found.</div>;
  }
    return (
      <div className="chosen--container">
        <div className="back-btn " onClick={props.selected}>
          <img src={Arrow} alt="" />
          <button><a href="/">Go Back</a></button>
        </div>
        <section>
          {props.selectedCountries.map((countryInfo, index) => (
            <article key={index} className="chosen--content">
              <div className="chosen-flag-container">
                <img src={countryInfo.flags.png} alt={`${countryInfo.name.common} flag`} className="chosen-flag bounce-in-top" />
              </div>
              <div className="chosen-info">
                <h1>{countryInfo.name.common}</h1>
                <div className="chosen-context">
                  <div>
                      <p><span>Native Name:</span> {JSON.stringify(countryInfo.nativeName)}</p>
                      <p><span>Population:</span> {countryInfo.population.toLocaleString()}</p>
                      <p><span>Region:</span> {countryInfo.region}</p>
                      <p><span>Sub Region:</span> {countryInfo.subregion}</p>
                      <p><span>Capital:</span> {countryInfo.capital}</p>
                  </div>
                  <div>
                      <p><span>Top Level Domain:</span> {countryInfo.tld}</p>
                      <p><span>Currency:</span> {Object.values(countryInfo.currencies).map((item) => {return item.name;}).join(",")}</p>
                      <p><span>Languages:</span> {Object.values(countryInfo.languages).join(", ")}</p>
                  </div>
                </div>
                <div className="chosen-borders">
                <p className="borders"><span>Border Countries: </span></p>
              </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    );
  }