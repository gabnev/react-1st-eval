import React from "react";

const CountryDetails = (props) => {

  console.log("details props ", props.checkedCountries.name);

  return (
    <div className="ui segment">
      <div className="">
        <h2>{props.checkedCountries.name}</h2>
      </div>
    </div>
  );
}

export default CountryDetails;