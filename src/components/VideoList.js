import React, { Component } from 'react';
import VideoItem from './VideoItem';

class VideoList extends Component {

  render() {
    let VideoLists = this.props.videos.map((video) => {
      return (
      <VideoItem 
        key={video.id.videoId}
        video={video}
        handleVideoSelect={this.props.handleVideoSelect}
      ></VideoItem>);
    });
    return (
      
      <div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="VideoList">
            {VideoLists}                      
          </div>
        </div>
      </div>
    );
  }
}

export default VideoList;