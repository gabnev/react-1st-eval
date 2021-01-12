import React from "react";
import { connect } from "react-redux";

const CountryDetail = ({selectedCountry}) => {

  const renderDetails = () => {
    if (selectedCountry !== null) {
      return (
        <div>
          <h2>Name: {selectedCountry.name}</h2>
          <p>Region: {selectedCountry.region}</p>
        </div>
      );
    };
  }

  return (
    <div className="ui segment">
      <h3>Country details</h3>
      {renderDetails()}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { selectedCountry: state.selectedCountry }
}

export default connect(mapStateToProps)(CountryDetail);