import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { selectCountry } from "../actions";
import { favoriteCountry } from "../actions";
import { fetchCountries } from "../actions";
import CountrySearch from "./CountrySearch";

const CountryList = (props) => {

  const [term, setTerm] = useState("");

  useEffect(() => {
    if (props.selectedRegion !== null) {
      props.fetchCountries(props.selectedRegion);
    }
  }, [props.selectedRegion])

  const searchMain = (country) => {
    setTerm(country);
  }

  const renderList = () => {

    console.log("favorites:", props.favoriteCountries);
    const favoriteList = props.favoriteCountries;
    
    if (props.countriesList !== null && term === "") {
      return props.countriesList.map((country) => {
        
        if (favoriteList.includes(country)) {
          return (
            <div className="item" key={country.name}>
              <div className="right floated content">
                <button
                  className="ui button primary"
                  onClick={() => props.selectCountry(country)}
                >
                  Details
                </button>
              </div>
              <div className="content">
                <p>{country.name}</p>
              </div>
            </div>
          );
        } else {
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

    } else if (props.countriesList !== null && term !== "") {
      return props.countriesList.map((country) => {

        if (favoriteList.includes(country)) {
          if (country.name.toLowerCase().includes(term)) {
            return (
              <div className="item" key={country.name}>
                <div className="right floated content">
                  <button
                    className="ui button primary"
                    onClick={() => props.selectCountry(country)}
                  >
                    Details
                  </button>
                </div>
                <div className="content">
                  <p>{country.name}</p>
                </div>
              </div>
            );
          }
        } else {
          if (country.name.toLowerCase().includes(term)) {
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
        }

        
      });
    }
  }

  return (
    <div>
      <div className="ui segment">
        <CountrySearch searchTerm={searchMain} />
      </div>
      <div className="ui divided list" >{renderList()}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedRegion: state.selectedRegion,
    countriesList: state.countriesList,
    favoriteCountries: state.favoriteCountries
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