import React from "react";
import { connect } from "react-redux";

const CountryDetail = (props) => {

  const renderDetails = () => {
    if (props.selectedCountry !== null) {
      return (
        <div>
          <h2>Name: {props.selectedCountry.name}</h2>
          <p>Region: {props.selectedCountry.region}</p>
        </div>
      );
    };
  }

  return (
    <div className="ui segment">
      {renderDetails()}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return { selectedCountry: state.selectedCountry }
}

export default connect(mapStateToProps)(CountryDetail);