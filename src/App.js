import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/SearchBar';
import VideoDetail from './containers/VideoDetail';
import VideoList from './containers/VideoList';


class App extends Component {


  render() {
    return (
      <div>
        <div className="container">
          <SearchBar />
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="row">
                <VideoDetail />
                <VideoList />
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
