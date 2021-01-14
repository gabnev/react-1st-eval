import React, { useState } from "react";
import { connect } from "react-redux";
import { defavoriteCountry, selectCountry } from "../actions";
import CountrySearch from "./CountrySearch";

const CountryFavorites = (props) => {

  const [term, setTerm] = useState("");

  const renderFavorites = () => {

    

    if (term === "") {
      return props.favoriteCountries.map((country) => {

        return (
          <div key={country.name}>
            <h4>
              {country.name}
              <i className="window maximize outline icon green" floated="right" onClick={() => props.selectCountry(country)}></i>
              <i className="window close icon red" floated="right" onClick={() => props.defavoriteCountry(country)}></i>
            </h4>
          </div>
        );
      });
    } else if (term !== "") {
      return props.favoriteCountries.map((country) => {
        if (country.name.toLowerCase().includes(term))
          return (
            <div key={country.name}>
              <h4>
                {country.name}
                <i className="window maximize outline icon green" floated="right" onClick={() => props.selectCountry(country)}></i>
                <i className="window close icon red" floated="right" onClick={() => props.defavoriteCountry(country)}></i>
              </h4>
            </div>
          );
      }
      );
    }
  }

  const searchFavorite = (country) => {
    setTerm(country);
  }

  return (
    <div className="ui segment">
      <h3>
        My Favorite Countries
      </h3>
      <CountrySearch searchTerm={searchFavorite} />
      <span>
        {renderFavorites()}
      </span>
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    favoriteCountries: state.favoriteCountries
  }
}

export default connect(mapStateToProps, { defavoriteCountry, selectCountry })(CountryFavorites);