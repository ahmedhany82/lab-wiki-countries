import React from 'react'
import { Link } from 'react-router-dom'

const CountriesList = (props) => {
    console.log("This from CountriesList: ", props.countries)
    const countries = props.countries.map(country => {
        return (
            <div className="list-group-item list-group-item-action">
                <Link to={`/countries/${country.alpha3Code}`} key={country.alpha3Code}>{country.name    }</Link>           
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


