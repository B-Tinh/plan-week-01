import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';


class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <SearchBar />
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
