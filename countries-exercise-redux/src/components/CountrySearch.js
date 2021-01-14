import React from "react";

const CountrySearch = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const userInput = (event) => {
    props.searchTerm(event.target.value);
  }

  return (
    <div >
      <form
        className="ui form"
        onSubmit={(event) => handleSubmit(event)} >
        <div className="field">
          <label>Search country by name</label>
          <input
            type="text"
            name="country"
            onChange={userInput}
            placeholder="Type desired country"
          />
        </div>
      </form>
    </div>
  );
};

export default CountrySearch;