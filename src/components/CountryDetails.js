import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryDetails(props) {

    const country = props.countries.find(country => country.cca3 === props.match.params.cca3)
    const borders = country.borders.map(border => {
        let borderCountry = props.countries.find(country => country.cca3 === border)
        // return <li>{borderCountry.name.common}</li>
        return <li>
            <Link to={`/countries/${border}`}>{borderCountry.name.common}</Link>
        </li>
    })
    console.log("country info: ", country)
    console.log("country borders: ", borders)
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area} {'\u33A2'}</p>
            <ul>
                {borders}
            </ul>
        </div>
    )
}
