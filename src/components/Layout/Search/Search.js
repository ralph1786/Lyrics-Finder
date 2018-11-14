import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../../context";

import "./Search.css";

class Search extends Component {
  state = {
    trackTitle: ""
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmitHandler = (dispatch, e) => {
    e.preventDefault();
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${
          this.state.trackTitle
        }&page_size=10&page=1&s_track_rating=desc&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      )
      .then(res => {
        dispatch({
          type: "SEARCH_TRACKS",
          payload: res.data.message.body.track_list
        });
        this.setState({
          trackTitle: ""
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center font_change">
                <i className="fas fa-headphones-alt fa-lg icon-color" /> Search
                Your FavSongs!
              </h1>
              <p className="lead text-center">
                Get the lyrics of your favorite songs.
              </p>
              <form onSubmit={this.onSubmitHandler.bind(this, dispatch)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Song Title Goes Here..."
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChangeHandler}
                  />
                </div>
                <button
                  className="btn button_color btn-lg btn-block mb-3"
                  type="submit"
                >
                  Search Lyrics
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
