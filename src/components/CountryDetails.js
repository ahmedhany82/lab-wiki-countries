import React from 'react'
import { Link } from 'react-router-dom'

export default class CountryDetails extends React.Component {

    render() {
        const country = this.props.countries.find(country => country.alpha3Code === this.props.match.params.cca3)
        const borders = country.borders.map((border,index) => {
        let borderCountry = this.props.countries.find(country => country.alpha3Code === border)
            return <li key={index}>
                <Link to={`/countries/${border}`} >{borderCountry.name}</Link>
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
}