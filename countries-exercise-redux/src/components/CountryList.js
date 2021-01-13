import React, { useEffect } from "react";
import { connect } from "react-redux";
import { selectCountry } from "../actions";
import { favoriteCountry } from "../actions";
import { fetchCountries } from "../actions";
import CountrySearch from "./CountrySearch";

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
                <button
                  className="ui button primary"
                  onClick={() => props.selectCountry(country)}
                >
                  Details
                </button>
                <button
                  className="ui button primary"
                  onClick={() => props.favoriteCountry(country)}
                >
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

  return (
    <div>
      <div className="ui segment">
        <CountrySearch />
        <div className="ui divided list">{renderList()}</div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    selectedRegion: state.selectedRegion,
    countriesList: state.countriesList,
    favoriteCountry: state.favoriteCountry
  };
}

export default connect(
  mapStateToProps,
  {
    selectCountry: selectCountry,
    fetchCountries: fetchCountries,
    favoriteCountry: favoriteCountry
  }
)(CountryList);