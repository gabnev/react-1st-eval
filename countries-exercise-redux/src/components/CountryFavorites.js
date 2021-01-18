import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { defavoriteCountry, selectCountry } from "../actions";
import CountrySearch from "./CountrySearch";

const CountryFavorites = () => {

  const [term, setTerm] = useState("");

  const favorite = useSelector(state => state.favoriteCountries);
  const dispatch = useDispatch();

  const renderFavorites = () => {    

    if (term === "") {
      return favorite.map((country) => {
        return (
          <div key={country.name}>
            <h4>
              {country.name}
              <i className="window maximize outline icon green" floated="right" onClick={() => dispatch(selectCountry(country))}></i>
              <i className="window close icon red" floated="right" onClick={() => dispatch(defavoriteCountry(country))}></i>
            </h4>
          </div>
        );
      });
    } else {
      return favorite.map((country) => {
        if (country.name.toLowerCase().includes(term))
          return (
            <div key={country.name}>
              <h4>
                {country.name}
                <i className="window maximize outline icon green" floated="right" onClick={() => dispatch(selectCountry(country))}></i>
                <i className="window close icon red" floated="right" onClick={() => dispatch(defavoriteCountry(country))}></i>
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

export default CountryFavorites;




// const mapStateToProps = (state) => {

//   return {
//     favoriteCountries: state.favoriteCountries
//   }
// }

// export default connect(mapStateToProps, { defavoriteCountry, selectCountry })(CountryFavorites);