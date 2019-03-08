import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';

import Home from './Home/Home.js';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';


import Channel from './Channel/Channel.js';
import Video from './Video/Video.js';
import Search from './Search/Search.js';
import PageNotFound from './PageNotFound/PageNotFound.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App Site">
            <div className="Site-content">
                <div className="App-header">
                  <Header />
                </div>
                <div className="main">
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/channel/:channelName/:channelId" component={Channel} />
                    <Route exact path="/video/:videoId" component={Video} />
                    <Route exact path="/search" component={Search} />
                    <Route exact component={PageNotFound} />
                  </Switch>
                </div>
            </div>
            <Footer />
        </div>
      </Router>
    );
  }
}


export default App;
