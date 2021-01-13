import React from "react";

import CountryList from "./CountryList";
import CountryDetail from "./CountryDetail";
import RegionSelect from "./RegionSelect";
import CountrySearch from "./CountrySearch";
import CountryFavorites from "./CountryFavorites";

const App = () => {
  return (
    <div>
      <div className="ui container grid">
        <div className="ui row">
          <div className="eight wide column">
            <RegionSelect />
          </div>
        </div>
        <div className="ui row">
          <div className="eight wide column">
            <CountryList />
          </div>
          <div className="four wide column">
            <CountryDetail />
          </div>
          <div className="four wide column">
            <CountryFavorites />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;