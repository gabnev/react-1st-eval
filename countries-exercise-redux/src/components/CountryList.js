import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCountry } from "../actions";
import { favoriteCountry } from "../actions";
import { fetchCountries } from "../actions";
import CountrySearch from "./CountrySearch";

const CountryList = (props) => {

  const [term, setTerm] = useState("");

  const region = useSelector(state => state.selectedRegion);
  const countries = useSelector(state => state.countriesList);
  const favorites = useSelector(state => state.favoriteCountries);
  const dispatch = useDispatch();  

  useEffect(() => {
    if (region !== null) {
      dispatch(fetchCountries(region));
    }
  }, [dispatch, region])

  const searchMain = (country) => {
    setTerm(country);
  }

  const renderList = () => {
    const favoriteList = favorites;

    if (countries !== null) {
      // eslint-disable-next-line array-callback-return
      return countries.map((country) => {
        if (term === "" || country.name.toLowerCase().includes(term)) {          
          return (
            <div className="item" key={country.name}>
              <div className="right floated content">
                <button
                  className="ui button primary"
                  onClick={() => dispatch(selectCountry(country))}
                >
                  Details
                </button>
                {!favoriteList.includes(country) && <button
                  className="ui button primary"
                  onClick={() => dispatch(favoriteCountry(country))}
                >
                  Favorite
                </button>}
              </div>
              <div className="content">
                <p>{country.name}</p>
              </div>
            </div>
          );

        }
      });
    }
  }

  return (
    <div>
      <div className="ui segment">
        <CountrySearch searchTerm={searchMain} />
      </div>
      <div className="ui divided list" >{renderList()}</div>
    </div>
  )
}

export default CountryList;

// const mapStateToProps = (state) => {
//   return {
//     selectedRegion: state.selectedRegion,
//     countriesList: state.countriesList,
//     favoriteCountries: state.favoriteCountries
//   };
// }

// export default connect(
//   mapStateToProps,
//   {
//     selectCountry: selectCountry,
//     fetchCountries: fetchCountries,
//     favoriteCountry: favoriteCountry
//   }
// )(CountryList);