/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React from "react";

const ContinentSelect = (props) => {
  
  let region = "africa";

  const handleChange = (event) => {
    region = event.target.value;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(region);
  }

  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} >
        <label>
          Select your region:
          <select onChange={handleChange} >
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
          <input type="submit" value="Submit" />
        </label>
      </form>
    </div>
  );
}

export default ContinentSelect;