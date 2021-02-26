import React from 'react'
import { Link } from 'react-router-dom'

const CountriesList = (props) => {
    const countries = props.countries.map(country => {
        return (
            <div key={country.cca3} className="list-group-item list-group-item-action">
                <Link to={`/countries/${country.cca3}`}>{country.name.common}</Link>           
            </div>
        )
    })

    return (
        <div className="list-group">
            {countries}
        </div>
    )
}

export default CountriesList;


