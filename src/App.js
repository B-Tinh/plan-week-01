import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/'
})

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }
  }

  onSearchForm = async (textSearch) => {
    const res = await axiosInstance.get('/search', {
      params: {
        keyWord: textSearch,
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyDcaMOVzZH-eNsMREv8BhFrAyUkp7Ife_I'
      }
      
    })
    this.setState({
      videos: res.data.items
    })
    console.log(this.state.videos)
  }



  render() {   
    return(     
      <div>
        <div className="container">
          <SearchBar onHandleSearch={this.onSearchForm}/>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="row">
                <VideoDetail />
                <VideoList 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
