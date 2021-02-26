import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryDetails(props) {

    console.log("props: ", props)
    const country = props.countries.find(country => country.cca3 === props.match.params.cca3)
    const borders = country.borders.map(border => {
        let borderCountry = props.countries.find(country => country.cca3 === border)
        return <li>
            <Link to={`/countries/${border}`}>{borderCountry.name.common}</Link>
        </li>
    })

    return (
        <div>
            <h1>{country.name.common}</h1>
            <table className="table"> 
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{width: '30%'}}>Capital</td>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                        {country.area} km<sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {borders}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
