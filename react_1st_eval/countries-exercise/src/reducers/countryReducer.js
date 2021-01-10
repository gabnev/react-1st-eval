/* eslint-disable import/no-anonymous-default-export */

export default (state = [], action) => {
  switch(action.type) {
    case "SELECT_COUNTRY":
      return [...state, action.payload]
    case "DESELECT_COUNTRY":
      return state.filter(element => element !== action.payload)
    default:
      return state;
  }
}