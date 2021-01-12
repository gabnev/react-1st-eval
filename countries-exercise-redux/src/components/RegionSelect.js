import React from "react";
import { connect } from "react-redux"

const RegionSelect = (props) => {

  const renderForm = () => {
    return props.region.map((option) => {

      console.log("options", option)

      return (
        <option key={option.region} value={option.region}>{option.region}</option>
      )
    })
  }

  return (
  <div className="ui segment">
    <select>
    {renderForm()}
    </select>
  </div>
  );
}

const mapStateToProps = (state) => {
  return { region: state.region }
}

export default connect(mapStateToProps)(RegionSelect);