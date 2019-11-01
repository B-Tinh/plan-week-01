import React, { Component } from 'react';
import VideoItem from './VideoItem';

class VideoList extends Component {

  render() {
    return (
      <div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="VideoList">
              <VideoItem
              />
          </div>
        </div>
      </div>
    );
  }
}

export default VideoList;