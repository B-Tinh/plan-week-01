import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <div className="SearchBar">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="input-group mt-20">
              <input
                name="keyword"
                type="text"
                className="form-control"
                placeholder="Nhập từ khóa..."
              />
              <span className="input-group-btn">
                <button className="btn btn-primary" type="button">
                  <span className="fa fa-search mr-5" />
                  Tìm
            </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;