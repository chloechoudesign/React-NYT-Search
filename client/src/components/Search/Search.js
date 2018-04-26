import React from "react";

const Search = (props) => {
  return (
    <div>
      <div className="panel panel-default">
        <div className="panel-heading">Search</div>
  

        <div className="panel-body">
          <div className="input-group">
            <input 
              type="text" 
              className="form-control"
              onChange={props.handleInputChange}
              value={props.search}
            />

            <span className="input-group-btn">
              <button 
                className="btn" 
                id="search-btn" 
                type="button"
                onClick={props.handleFormSubmit}
              ><i className="fa fa-search"></i>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Search;


