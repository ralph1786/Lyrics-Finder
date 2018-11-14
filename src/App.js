import React, { Component } from "react";
import Navbar from "./components/Layout/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./components/Layout/Index";
import Provider from "./context";
import Lyrics from "./components/Tracks/Lyrics";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <React.Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/lyrics/track/:id" component={Lyrics} />
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
