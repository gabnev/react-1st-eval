import React from "react";

import CountryList from "./CountryList";
import CountryDetail from "./CountryDetail";
import RegionSelect from "./RegionSelect";
import CountrySearch from "./CountrySearch";
import CountryFavorites from "./CountryFavorites";

const App = () => {

  const regions = [
    { id: 0, region: "" },
    { id: 1, region: "africa" },
    { id: 2, region: "americas" },
    { id: 3, region: "asia" },
    { id: 4, region: "europe" },
    { id: 5, region: "oceania" }
  ];

  return (
    <div>
      <div className="ui container grid">
        <div className="ui row" style={{ height: "200px" }}>
          <div className="eight wide column">
            <RegionSelect regions={regions} />
          </div>
          <div className="eight wide column">
            <CountryDetail />
          </div>
        </div>
        <div className="ui row">
          <div className="eight wide column">
            <CountryList />
          </div>
          <div className="eight wide column">
            <CountryFavorites />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;