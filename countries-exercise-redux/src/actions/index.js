import restCountries from "../apis/restCountries";

export const fetchCountries = (region) => {

  return async (dispatch) => {
    const response = await restCountries.get(`${region}`);

    dispatch({
      type: "FETCH_COUNTRIES",
      payload: response.data
    });
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