export const selectCountry = () => {
  return {
    type: "SELECT_COUNTRY",
    payload: ""
  };
};

export const deselectCountry = () => {
  return {
    type: "DESELECT_COUNTRY",
    payload: ""
  };
};