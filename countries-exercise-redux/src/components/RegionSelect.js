import React from "react";
import { useDispatch } from "react-redux";
import { selectRegion } from "../actions";

const RegionSelect = (props) => {

  const dispatch = useDispatch();

  const renderForm = () => {
    return props.regions.map((option) => {
      return (
        <option
          key={option.id}
          value={option.region}
        >
          {option.region}
        </option>
      );
    });
  };

  return (
    <div className="ui segment">
      <h3>
        SELECT REGION
      </h3>
      <select onChange={(event) => dispatch(selectRegion(event.target.value))} >
        {renderForm()}
      </select>
    </div>
  );
}

export default RegionSelect;

// export default connect(
//   null,
//   { selectRegion }
// )(RegionSelect);