import React, { Component } from 'react';

class VideoDetail extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <div className="VideoDetail">
            <div className="ShowVideo"></div>
            <div className="ShowVideoTitle">
              <h2>Video Title:</h2>
              <p>Description Video:</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoDetail;