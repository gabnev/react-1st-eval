import React from "react";
import { connect } from "react-redux";

const CountryFavorites = (props) => {

  console.log(props.favoriteCountries)

  return (
    <div className="ui segment">
      <h3>
        Favorites
      </h3>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    favoriteCountries: state.favoriteCountries
  }
}

export default connect(mapStateToProps)(CountryFavorites);