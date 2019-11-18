import React, { Component } from "react";

class SongList extends Component {
  render() {
    const { song, handleSongSelect } = this.props;
    return (
      <div>
        <div className="SongList">         
          <div className="row">
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
            <span>{song.song}</span>
            </div>           
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <button type="button" className="btn btn-primary" onClick={() => handleSongSelect(song)}>
            Select
          </button>
            </div>           
          </div>         
        </div>
      </div>
    );
  }
}

export default SongList;
