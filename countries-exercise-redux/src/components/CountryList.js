import React, { useEffect } from "react";
import { connect } from "react-redux";
import { selectCountry } from "../actions";
import { fetchCountries } from "../actions";

const CountryList = (props) => {

  useEffect(() => {
    if (props.selectedRegion !== null) {
      props.fetchCountries(props.selectedRegion);
    }
  }, [props.selectedRegion])

  const renderList = () => {

    if (props.countriesList !== null) {
     
      return props.countriesList.map((country) => {

        if (country.region.toLowerCase() === props.selectedRegion.toLowerCase()) {
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
  }

  console.log(props)

  return <div className="ui divided list">{renderList()}</div>
}

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    selectedRegion: state.selectedRegion,
    countriesList: state.countriesList
  };
}

export default connect(
  mapStateToProps,
  {
    selectCountry: selectCountry,
    fetchCountries: fetchCountries
  }
)(CountryList);