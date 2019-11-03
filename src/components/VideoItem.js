import React, { Component } from 'react';

class VideoItem extends Component {
  render() {
    console.log('videoitem',this.props)
    const {video} = this.props
    return (
      
      <div>
        <div className="VideoItem" onClick={() => this.props.handleVideoSelect(video)}>
          <div class="row">
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <img className="ImgVideo" src={video.snippet.thumbnails.medium.url} alt = {video.snippet.description}></img>
            </div>
            <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <div className="VideoName">{video.snippet.title}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoItem;