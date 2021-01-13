import { combineReducers } from "redux";

const regionReducer = () => {
  return [
    { id: 0, region: "" },
    { id: 1, region: "africa" },
    { id: 2, region: "americas" },
    { id: 3, region: "asia" },
    { id: 4, region: "europe" },
    { id: 5, region: "oceania" },
  ]
};

const selectedCountryReducer = (state = null, action) => {
  switch (action.type) {
    case "COUNTRY_SELECTED":
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

const countriesListReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_COUNTRIES":
      return action.payload;
    default:
      return state;
  }
}

const countrySearchReducer = (state = null, action) => {
  switch(action.type) {
    case "FETCH_COUNTRY":
      return action.payload;
    default:
      return state;
  }
}

const favorite = [];

const favoriteCountriesReducer = (state = favorite, action) => {
  switch (action.type) {
    case "FAVORITE_COUNTRY":
      return [...state, action.payload];
    case "DEFAVORITE_COUNTRY":
      return [...state.filter((country) => country !== action.payload)]
    default:
      return state;
  }
}

export default combineReducers({
  countriesList: countriesListReducer,
  countrySearch: countrySearchReducer,
  favoriteCountries: favoriteCountriesReducer,
  region: regionReducer,
  selectedCountry: selectedCountryReducer,
  selectedRegion: selectedRegionReducer
});