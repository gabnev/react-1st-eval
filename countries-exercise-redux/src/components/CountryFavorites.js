import React, { useEffect } from "react";
import { connect } from "react-redux";
import { defavoriteCountry } from "../actions";

const CountryFavorites = (props) => {

  const renderFavorites = () => {
    return props.favoriteCountries.map((country) => {
      return (
        <div key={country.name}>
          <p >{country.name} <i className="cut icon" onClick={() => props.defavoriteCountry(country)}></i></p>          
        </div>
      );
    });
  }

  return (
    <div className="ui segment">
      <h3>
        My Favorite Countries
      </h3>
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

export default connect(mapStateToProps, { defavoriteCountry })(CountryFavorites);