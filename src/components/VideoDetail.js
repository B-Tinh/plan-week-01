import React, { Component } from 'react';
import { get } from 'lodash';
class VideoDetail extends Component {

  render() {
    const videoList = this.props.video;
    const videoId = get(videoList, 'id.videoId', '');
    const title = get(videoList, 'snippet.title', '');
    const description = get(videoList, 'snippet.description', '');
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div>
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <div className="VideoDetail">
            {(!videoList) ? <div></div> : <div className="ShowVideo"><iframe src={videoSrc} title='Video player' /></div>}
            <div className="ShowVideoTitle">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoDetail;