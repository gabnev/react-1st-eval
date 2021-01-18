import React from "react";
import { useSelector } from "react-redux";

const CountryDetail = () => {

  const details = useSelector(state => state.selectedCountry);

  const renderDetails = () => {
    if (details !== null) {
      return (
        <div>
          <h2>Name: {details.name}</h2>
          <p>Region: {details.region}</p>
        </div>
      );
    };
  };

  return (
    <div className="ui segment">
      <h3>Country details</h3>
      {renderDetails()}
    </div>
  );
}

export default CountryDetail;