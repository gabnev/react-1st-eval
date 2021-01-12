import { combineReducers } from "redux";

const countriesReducer = () => {
  return [
    { name: "Brasil", region: "americas"},
    { name: "Portugal", region: "europe"},
    { name: "Japan", region: "asia"}
  ];
};

const regionReducer = () => {
  return [
    { region: "africa"},
    { region: "americas"},
    { region: "asia"},
    { region: "europe"},
    { region: "oceania"},
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

export default combineReducers({
  countries: countriesReducer,
  selectedCountry: selectedCountryReducer,
  region: regionReducer
});