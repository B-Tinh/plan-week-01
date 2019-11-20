import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions";

class SongList extends Component {

  onHandleChange = event => {
    this.props.onEditText(event.target.value);
    console.log('event.target.value',event.target.value)
  };


  handleEditForm = (id, text) => {
    this.props.onEditText(id, text);
  };

  render() {
    const { song } = this.props;
    console.log("id", song);
    return (
      <div>
        <div className="SongList">
          <div className="row">
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
              <input
                type="text"
                name="textNotes"
                value={song.song}
                style={{ width: "100%" }}
                onChange={this.onHandleChange}
              />
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleSongSelect}
              >
                Select
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={this.handleEditForm(song.id, song.song)}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    sings: state.allReducer.sings,
    isDisplayForm: state.allReducer.isDisplayForm
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
    onSelectSong: song => {
      dispatch(actions.selectSong(song));
    },
    onEditText: (id, text) => {
      dispatch(actions.editText(id, text));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
