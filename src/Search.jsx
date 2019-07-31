import React from 'react';

const Search = props => {
  return (
    <div className="search">
      <h1>Users</h1>
      <p>If you want to get contact information for a specific user, just select group and then select the person from the list below.</p>

      <form id="searchForm" onSubmit={(e) => {
        e.preventDefault();
        props.filterList();
      }}>

        <div className="formField">
          <label htmlFor="genderDropdown">By Gender:</label>
          <select id="genderDropdown" onClick={e => props.updateGender(e.target.value)}>
            <option value='' >All</option>
            <option value='female' >Female</option>
            <option value='male' >Male</option>
          </select>
        </div>

        <div className="formField">
          <label htmlFor="dropdown">By Last Name: </label>
          <input type="text" value={props.lastName} onChange={e => props.updateLastName(e.target.value)}></input>
        </div>
        <button id="submitFilter">Submit</button>
      </form>
      <button id="clearFilter" onClick={e => props.clearFilter()}>Clear Filters</button>

    </div>
  )
}

export default Search;