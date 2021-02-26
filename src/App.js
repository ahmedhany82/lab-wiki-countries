import React from "react";
import './App.css';
import countries_data from './countries.json';
import { Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      countries: [] };
  }

  componentDidMount() {
    this.setState({
      countries: countries_data })
  }

  render () {
      return (
        <div>
          <Navbar />           
          <div className="container">
            <div className="row">
              <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
                  <CountriesList countries={this.state.countries} />
              </div>
              <div className="col-7">
                  <Route exact path="/countries/:cca3" render={(props)=> <CountryDetails {...props} countries={this.state.countries}/>} />
              </div>
            </div>
          </div>
        </div>
      );  
    }
  }

export default App;
