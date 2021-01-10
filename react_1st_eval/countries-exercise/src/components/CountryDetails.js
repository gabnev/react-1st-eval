import React from "react";

const CountryDetails = (props) => {

  return (
    <div className="ui segment">
      <div className="">
        <img href={props.checkedCountries.flag} alt="flag" />
        <h2>Name: {props.checkedCountries.name}</h2>
        <p>{props.test}</p>
      </div>
    </div>
  );
}

export default CountryDetails;