import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  onHandleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  onHandleSubmit = (event) => {
    event.preventDefault();
    this.props.onHandleSearch(this.state.text);
  }
  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="page-header SearchBar">
            <form onSubmit={this.onHandleSubmit}>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="form-group mt-20">
                  <input
                    type="text"
                    className="form-control mw-80"
                    placeholder="Nhập từ khóa..."
                    onChange={this.onHandleChange}
                    value={this.state.text}
                  />
                  <span className="input-group-btn btnSearch">
                    <button className="btn btn-primary" type="submit">
                      <span className="fa fa-search" />
                      Tìm
                      </button>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;