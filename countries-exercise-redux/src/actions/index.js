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