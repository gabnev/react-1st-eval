import React from "react";

const searchCountry = () => {

}

const CountrySearch = () => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          id="searchBar"
          onKeyUp={searchCountry}
          className="prompt" type="text"
          placeholder="Common passwords..."
          name="search"
        />
        <i className="search icon"></i>
      </div>
    </div>
  )
}

export default CountrySearch;