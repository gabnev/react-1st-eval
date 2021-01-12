import React from "react";
import { connect } from "react-redux";

const CountryList = (props) => {

  const renderList = () => {
    return props.countries.map((country) => {
      return (
        <div className="item" key={country.name}>
          <div className="right floated content">
            <button className="ui button primary">
              Select
            </button>
            <button className="ui button primary">
              Favorite
            </button>
          </div>
          <div className="content">
            <p>{country.name}</p>
          </div>
        </div>
      );
    });
  }

  return <div className="ui divided list">{renderList()}</div>
}

const mapStateToProps = (state) => {
  return { countries: state.countries };
}

export default connect(mapStateToProps)(CountryList);