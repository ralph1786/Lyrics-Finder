import React, { Component } from "react";
import axios from "axios";

// Following code creates a global state.
// In the app.js file everything must be wrapped by this component.
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_TRACKS":
      return {
        ...state,
        track_list: action.payload,
        heading: "Search Results"
      };
    default:
      return state;
  }
};

export default class Provider extends Component {
  state = {
    track_list: [],
    heading: "Top 10 Tracks",
    dispatch: action => this.setState(state => reducer(state, action))
  };

  //First https request in axios is to allow cross-origin requests
  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      )
      .then(res => {
        this.setState({
          track_list: res.data.message.body.track_list
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      //The props below will transfer the state to other components that use the consumer below.
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
