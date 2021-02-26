import React from 'react'
import { Link } from 'react-router-dom'

export default function CountriesList(props) {
    const countries = props.countries.map(country => {
        return (
            <div>
                <h3>
                    <Link to={`/countries/${country.cca3}`}>{country.name.official}</Link>
                </h3>            
            </div>
        )
    })
    return (
        <div>
            {countries}
        </div>
    )
}




