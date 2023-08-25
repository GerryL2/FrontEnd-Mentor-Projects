import React, { useState, useEffect } from "react";
import Country from "./Country";
import ChosenCountry from "./ChosenCountry"
import Search from "./images/search.svg";
import {Routes, Route} from "react-router-dom"

export default function MainContent(props) {
    const [countriesData, setCountriesData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [selectedContinent, setSelectedContinent] = useState("");
    const [selectedCountry, setSelectedCountry] = useState([])
    const [filters, setFilters] = useState([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((data) => setCountriesData(data));
    }, []);

    useEffect(() => {
        const filtered = countriesData.filter((country) =>
            country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
        );

        const filteredByContinent = selectedContinent
            ? filtered.filter((country) =>
                country.region.includes(selectedContinent)
              )
            : filtered;

        setFilteredCountries(filteredByContinent);


    }, [searchQuery, countriesData, selectedContinent]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleContinentChange = (e) => {
        setSelectedContinent(e.target.value);
    };

    function toggleChosen(country) {
        setSelectedCountry(prevSelectedCountry => {
          const selectedCountryInfo = countriesData.find(
            countryData => countryData.name.common === country
          );
    
          if (prevSelectedCountry.some(selectedCountry => selectedCountry.name.common === country)) {
            return prevSelectedCountry.filter(selectedCountry => selectedCountry.name.common !== country);
          } else {
            return [...prevSelectedCountry, selectedCountryInfo];
          }
        });
      }


    

    return (
        <main className="main--container" name="MainContent">
            <section className="search-bar">
                <div className="search">
                    <input
                        className={props.colorMode ? "black search-input" : "light search-input"}
                        type="text"
                        placeholder="Search for a country..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <img src={Search} alt="search button" className="search-icon" />
                </div>
                <select name="" id="" onChange={handleContinentChange} className={props.colorMode ? "black selectFilter" : "light selectFilter"}>
                    <option value="">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </section>
            <Routes>
                <Route
                    path="*"
                    element={<Country countries={filteredCountries} toggle={toggleChosen} countriesId={countriesData.name} />}
                />
                <Route
                    path="/chosencountry/:countryName"
                    element={<ChosenCountry selectedCountries={selectedCountry}  />}
                />
            </Routes>
        </main>
    );
}
