import React from "react";

import CountryList from "./CountryList";
import CountryDetail from "./CountryDetail";
import RegionSelect from "./RegionSelect";

const App = () => {
  return (
    <div>
      <div className="ui container grid">
        <div className="ui row">
          <div className="sixteen wide column">
            <RegionSelect />
          </div>
        </div>
        <div className="ui row">
          <div className="eight wide column">
            <CountryList />
          </div>
          <div className="eight wide column">
            <CountryDetail />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;