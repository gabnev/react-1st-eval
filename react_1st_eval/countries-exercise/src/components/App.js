import React, { useState } from "react";
import restCountries from "../apis/restCountries";
import restSelectedCountries from "../apis/restSelectedCountries";
import ContinentSelect from "./ContinentSelect";
import CountrySelect from "./CountrySelect";
import CountryList from "./CountryList";
import CountryDetails from "./CountryDetails";

const App = () => {

  const [countries, setCountries] = useState([]);
  const [checkedCountries, setCheckedCountries] = useState([]);

  const receiveRegion = async (selectedRegion) => {
    const response = await restCountries.get(`${selectedRegion}`);
    setCountries(response.data);
  }

  const receiveSelectedCountries = async (selectedCountry) => {    
    const response = await restSelectedCountries.get(`${selectedCountry}`);

    console.log(response.data);
    
    setCheckedCountries(response.data);

    console.log(checkedCountries);
  }

  return (
    <div>
      <ContinentSelect onSubmit={receiveRegion} />
      <CountrySelect />
      <div className="ui grid">
        <div className="eight wide column">
          <CountryList
            countries={countries}
            onUserInputChange={receiveSelectedCountries}
          />
        </div>
        <div className="eight wide column">
          <CountryDetails test="test" checkedCountries={checkedCountries} />
        </div>
      </div>
    </div>
  );
}

export default App;