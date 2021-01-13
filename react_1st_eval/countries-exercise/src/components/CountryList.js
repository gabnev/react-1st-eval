/* eslint-disable no-unused-expressions */
import React from "react";

const CountryList = (props) => {

  let checkedCountries = "";

  const handleChange = (event) => {

    
    // let checked = event.target.checked;
    
    let country = event.target.innerText;

    console.log(country)

    if (checkedCountries === "") {
      checkedCountries = country;
    } else if ( checkedCountries !== "") {
      checkedCountries = "";
    }
  }

  const returnCheckedCountries = () => {
    props.onUserInputChange(checkedCountries);
  }

  const renderList = () => {
    return props.countries.map((item) => {
      return (
        <div
          className=""
          key={item.name}
        >
          <p
            value={item.name}
            onClick={handleChange}
            data-country={item.name}
          >
          {item.name}
          </p>
        </div>
      );
    });
  }

return (
  <div
    id="list"
    className=""
    onClick={returnCheckedCountries}
  >
    {renderList()}
  </div>
);
}

export default CountryList;