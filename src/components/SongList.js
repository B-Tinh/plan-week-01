import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions";

class SongList extends Component {

  handleSongSelect = () => {
    this.props.onToggleForm()
    this.props.onSelectSong(this.props.song)
}
  onHandleChange = id => event => {
    console.log("event.target.value", event.target.value)
    this.props.onEditText(id, event.target.value)
  }

  handleEditForm = (id, text) => {
    this.props.onEditText(id, text);
  };

  render() {
    const { song } = this.props;
    return (
      <div>
        <div className="SongList">
          <div className="row">
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
              <div>
              <input
              className="form-control"
                type="text"
                value={song.song}
                style={{ width: "100%" }}
                onChange={this.onHandleChange(song.id)}
              />
              </div>
              
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
                onClick={() => this.handleEditForm(song.id, song.song)}
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
    },
    onChangeText: (value) => {
      dispatch(actions.changeInText(value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
