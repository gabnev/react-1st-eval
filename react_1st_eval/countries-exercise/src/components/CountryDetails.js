import React from "react";

const CountryDetails = (props) => {

  console.log("CountryDetails props: ", props)

  return (
    <div className="ui segment">
      <div className="">
        <h2>{props.checkedCountries.name}</h2>
      </div>
    </div>
  );
}

export default CountryDetails;