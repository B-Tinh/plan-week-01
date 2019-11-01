import React, { Component } from 'react';

class SearchBar extends Component {

  onSearch = (event) => {
    console.log('=>', event.target.value);
    this.props.onSearch()
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="page-header SearchBar">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="input-group mt-20">
                  <input
                    name="keyword"
                    type="text"
                    className="form-control"
                    placeholder="Nhập từ khóa..."
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-primary" type="button" onClick = {this.onSearch}>
                      <span className="fa fa-search" />
                      Tìm
                      </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;