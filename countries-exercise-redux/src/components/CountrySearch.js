import React, { useState } from "react";
import { connect } from "react-redux";
import { selectCountry } from "../actions";
import { favoriteCountry } from "../actions";

const CountrySearch = (props) => {

  const [term, setTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const renderSearch = () => {

    if (props.countriesList !== null) {

      return props.countriesList.map((country) => {

        if (country.name === term) {
          return (
            <div key={country.name}>
              {country.name}
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
            </div>
          )
        }
      });
    };
  };

  return (
    <div className="ui segment" >
      <form
        className="ui form"
        onSubmit={(event) => handleSubmit(event)} >
        <div className="field">
          <label>Search country by name</label>
          <input
            type="text"
            name="country"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            placeholder="Type desired country"
          />
        </div>
      </form>
      <div className="ui segment">
        Search Result:
        {renderSearch()}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    countriesList: state.countriesList,
    countrySearch: state.countrySearch,
    favoriteCountries: state.favoriteCountries,
  }
}

export default connect(mapStateToProps, { selectCountry, favoriteCountry })(CountrySearch);