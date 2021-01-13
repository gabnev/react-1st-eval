import restCountries from "../apis/restCountries";
import restCountry from "../apis/restCountry";

export const fetchCountries = (region) => {

  return async (dispatch) => {
    const response = await restCountries.get(`${region}`);

    dispatch({
      type: "FETCH_COUNTRIES",
      payload: response.data
    });
  };

};

export const fetchCountry = (country) => {

  return async (dispatch) => {
    const response = await restCountry.get(`${country}`)

    dispatch({ type: "FETCH_COUNTRY", payload: response.data})
  };
};

export const selectCountry = (country) => {
  return {
    type: "COUNTRY_SELECTED",
    payload: country
  };
};

export const selectRegion = (region) => {
  return {
    type: "REGION_SELECTED",
    payload: region
  };
};

export const favoriteCountry = (country) => {
  return {
    type: "FAVORITE_COUNTRY",
    payload: country
  }
}

export const defavoriteCountry = (country) => {
  return {
    type: "DEFAVORITE_COUNTRY",
    payload: country
  }
}