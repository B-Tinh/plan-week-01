import React, { Component } from "react";
import SongList from "./SongList";

class Right extends Component {
  render() {
    const {songList, isDisplayForm, handleSongSelect} = this.props;
    let elmSings = songList.map(song => {
      return <SongList  key={song.id} song={song} handleSongSelect={handleSongSelect}/>
    })
    return (
      <div>
          <div className={ isDisplayForm ? "col-xs-9 col-sm-9 col-md-9 col-lg-9" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <div className="Right">
              {elmSings}
            </div>
          </div>
      </div>
    );
  }
}

export default Right;
