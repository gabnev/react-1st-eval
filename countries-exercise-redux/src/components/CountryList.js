import React from "react";
import { connect } from "react-redux";
import { selectCountry } from "../actions";

const CountryList = (props) => {

  const renderList = () => {
    return props.countries.map((country) => {

      if (country.region === props.selectedRegion) {
        return (
          <div className="item" key={country.name}>
            <div className="right floated content">
              <button className="ui button primary"
                onClick={() => props.selectCountry(country)}
              >
                Details
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
      }      
    });
  }

  return <div className="ui divided list">{renderList()}</div>
}

const mapStateToProps = (state) => {
  return { countries: state.countries, selectedRegion: state.selectedRegion };
}

export default connect(mapStateToProps, { selectCountry: selectCountry })(CountryList);