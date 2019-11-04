import React, { Component } from 'react';
class VideoDetail extends Component {


  render() {
    if (!this.props.video) {
      return <div>...abc</div>
  }
  const videoSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
  
    return (
      <div>
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <div className="VideoDetail">
            <div className="ShowVideo"><iframe src={videoSrc} allowFullScreen title='Video player' /></div>
            <div className="ShowVideoTitle">
              <h2>Video Title: {this.props.video.snippet.title}</h2>
              <p>Description Video:</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoDetail;