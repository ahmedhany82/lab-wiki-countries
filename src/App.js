import React from "react";
import './App.css';
import countries from './countries.json';
import { Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";

function App() {
  return (
    <div className="App">
      <Navbar />           
      <div className="container">
        <div className="row">
        <CountriesList countries={countries} />
        {/* React Router Route rendering the CountryDetails should go here */}
        <Route exact path="/countries/:cca3" component={CountryDetails} />
        </div>
      </div>
    </div>
  );
}

export default App;
