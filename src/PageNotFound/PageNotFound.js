import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";

import './PageNotFound.css';

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';


class PageNotFound extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
      return (
        <React.Fragment>
          <Header />
          <div className="page-not-found container-fluid">
            <h1>Page Not Found</h1>
            <hr />
            <p>Please go back.</p>
          </div>
          <Footer />
        </React.Fragment>
      );
  }


}

export default PageNotFound;
