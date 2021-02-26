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
    console.log('Component did mount!')
    this.setState({
      countries: countries_data })
  }

  render () {
      return (
        <div className="App">
          <Navbar />           
          <div className="container">
            <div className="row">
              <CountriesList countries={this.state.countries} />
              <Route exact path="/countries/:cca3" render={(props)=> <CountryDetails {...props} countries={this.state.countries}/>} />
            </div>
          </div>
        </div>
      );  
    }
  }

export default App;
