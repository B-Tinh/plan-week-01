import React, { Component } from "react";
import SongList from "./SongList";
import { connect } from 'react-redux';

class Right extends Component {
  render() {
    const {sings , isDisplayForm, handleSongSelect} = this.props;
    let elmSings = sings.map(song => {
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
const mapStateToProps = (state) => {
  return {
    sings: state.sings
  }
};

export default connect(mapStateToProps,null)(Right);
