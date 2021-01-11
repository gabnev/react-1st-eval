/* eslint-disable no-unused-expressions */
import React from "react";

const CountryList = (props) => {

  let checkedCountries = [];

  const handleChange = (event) => {

    let checked = event.target.checked;

    let country = event.target.value;

    if (checked) {
      checkedCountries = [...checkedCountries, country];
    } else if (!checked) {
      checkedCountries = checkedCountries.filter((item) => item !== country);
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
          <input
            type="checkbox"
            value={item.name}
            onChange={handleChange}
            data-country={item.name}
          />
          <label>{item.name}</label>
        </div>
      );
    });
  }

  return (
    <div
      id="list"
      className=""
      onChange={returnCheckedCountries}
    >
      {renderList()}
    </div>
  );
}

export default CountryList;