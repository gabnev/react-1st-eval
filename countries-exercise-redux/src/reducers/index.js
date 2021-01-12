import { combineReducers } from "redux";

const countriesReducer = () => {
  return [
    { name: "Brasil", region: "americas" },
    { name: "Portugal", region: "europe" },
    { name: "Japan", region: "asia" }
  ];
};

const regionReducer = () => {
  return [
    { id: 1, region: "africa" },
    { id: 2, region: "americas" },
    { id: 3, region: "asia" },
    { id: 4, region: "europe" },
    { id: 5, region: "oceania" },
  ]
}

const selectedCountryReducer = (state = null, action) => {
  switch (action.type) {
    case "SELECTED_COUNTRY":
      return action.payload;
    default:
      return state;
  }
}

const selectedRegionReducer = (state = null, action) => {
  switch (action.type) {
    case "REGION_SELECTED":
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  countries: countriesReducer,
  selectedCountry: selectedCountryReducer,
  region: regionReducer,
  selectedRegion: selectedRegionReducer
});