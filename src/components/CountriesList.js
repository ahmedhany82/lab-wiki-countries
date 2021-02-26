import React from 'react'
import { Link } from 'react-router-dom'

const CountriesList = (props) => {
    const countries = props.countries.map(country => {
        return (
            <div key={country.cca3}>
                <h3>
                    <Link to={`/countries/${country.cca3}`}>{country.name.common}</Link>
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

export default CountriesList;


