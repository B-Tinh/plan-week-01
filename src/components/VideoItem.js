import React, { Component } from 'react';

class VideoItem extends Component {
  render() {
    return (
      <div>
        <div className="VideoItem">
          <div class="row">
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <div className="ImgVideo"></div>
            </div>
            <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <div className="VideoName"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoItem;