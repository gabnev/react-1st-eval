import React, { useState } from "react";
import "../App.css";
import restCountries from "../apis/restCountries";
import restSelectedCountries from "../apis/restSelectedCountries";
import ContinentSelect from "./ContinentSelect";
import CountrySelect from "./CountrySearch";
import CountryList from "./CountryList";
import CountryDetails from "./CountryDetails";
import CountrySearch from "./CountrySearch";

const App = () => {

  const [countries, setCountries] = useState([]);
  const [checkedCountries, setCheckedCountries] = useState({});

  const receiveRegion = async (selectedRegion) => {
    const response = await restCountries.get(`${selectedRegion}`);
    setCountries(response.data);
  }

  const receiveSelectedCountries = async (selectedCountry) => {

    console.log("selected country ", selectedCountry);

    if (selectedCountry !== "") {
      const response = await restSelectedCountries.get(`${selectedCountry}`);
  
      setCheckedCountries(response.data);
    } else {
      setCheckedCountries({});
    }

    console.log("checked countries ", checkedCountries);
  }


  return (
    <div>
      <ContinentSelect onSubmit={receiveRegion} />
      <CountrySearch />
      <div className="ui grid">
        <div className="eight wide column">
          <CountryList
            countries={countries}
            onUserInputChange={receiveSelectedCountries}
          />
        </div>
        <div className="eight wide column">
          <CountryDetails checkedCountries={checkedCountries} />
        </div>
      </div>
    </div>
  );
}

export default App;