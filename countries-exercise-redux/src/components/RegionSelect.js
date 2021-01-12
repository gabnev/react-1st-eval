import React from "react";
import { connect } from "react-redux";
import { selectRegion } from "../actions";

const RegionSelect = (props) => {

  const renderForm = () => {
    return props.region.map((option) => {
      return (
        <option
          key={option.id}
          value={option.region}
        >
          {option.region}
        </option>
      )
    })
  }

  return (
    <div className="ui segment">
      <h3>
        SELECT REGION
      </h3>
      <select onChange={(event) => props.selectRegion(event.target.value)} >
        {renderForm()}
      </select>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { region: state.region };
}

export default connect(
  mapStateToProps,
  { selectRegion: selectRegion }
)(RegionSelect);