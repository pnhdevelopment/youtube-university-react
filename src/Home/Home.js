import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';


// import logo from './logo.svg';
import './Home.css';

class Home extends Component {

   

  constructor(props) {
    super(props);

    this.API_KEY = 'AIzaSyAv9SveXc91NBavZeo6xUjJ1Hl0xM81p8U';

    this.webDevChannelIds = 'UCoebwHSTvwalADTJhps0emA,UCyIe-61Y8C4_o-zZCtO4ETQ,UCO1cgjhGzsSYb1rsB4bFe4Q,UCW5YeuERMmlnqo4oq8vwUpg,UC29ju8bIPH5as8OGnQzwJyA';
    this.webDevURL = 'https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=' + this.webDevChannelIds + '&key=' + this.API_KEY;

    this.webDesignChannelIds = 'UCvBGFeXbBrq3W9_0oNLJREQ,UCyU5wkjgQYGRB0hIHMwm2Sg,UCVyRiMvfUNMA1UPlDPzG5Ow,UC-b3c7kxa5vU-bnmaROgvog,UCIp9sEZiv36cDG7cEnrVU7Q,UC64eec0UYHxflyEWgyZOvLA';
    this.webDesignURL = 'https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=' + this.webDesignChannelIds + '&key=' + this.API_KEY;


    this.state = {
      error: null,
      webDesignIsLoaded: false,
      webDevIsLoaded: false,
      webDesignItems: [],
      webDevItems: []
    };
  }

  componentDidMount() {

    fetch(this.webDesignURL)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            webDesignIsLoaded: true,
            webDesignItems: result.items
          });
        },
        (error) => {
          this.setState({
            webDesignIsLoaded: true,
            error
          });
        }
      )

    fetch(this.webDevURL)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            webDevIsLoaded: true,
            webDevItems: result.items
          });
        },
        (error) => {
          this.setState({
            webDevIsLoaded: true,
            error
          });
        }
      )


  }


  imageFadeIn(el){
    el.target.style.opacity = 1;
  }


  render() {
    const { error, webDevIsLoaded, webDesignIsLoaded, webDevItems, webDesignItems } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!webDevIsLoaded && !webDesignIsLoaded) {
      return <div className="loader"></div>;
    } else {
      return (
      <React.Fragment>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Youtube University</title>
            <meta name="description" content="A collection of web design and web development tutorials." />
            <meta name="author" content="pnhdevelopment" />
            <meta name="keywords" content="Web design, Web development" />
        </Helmet>

        <section className="home container-fluid">

          <h1>Web design</h1>
          <hr />
          <div className="row">
            {webDesignItems.map(channel => (
              <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4" key={channel.id}>
                <Link to={`/channel/${channel.snippet.customUrl}/${channel.id}`} >
                  <div className="wrapper">
                    <img
                      src={channel.snippet.thumbnails.medium.url}
                      onLoad={this.imageFadeIn}
                      alt={channel.snippet.title}
                    />
                    <h1 className="d-none d-md-inline-block">{channel.snippet.title}</h1>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <h1>Web development</h1>
          <hr />
          <div className="row">
            {webDevItems.map(channel => (
              <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4" key={channel.id}>
                <Link to={`/channel/${channel.snippet.customUrl}/${channel.id}`}>
                  <div className="wrapper">
                    <img
                      src={channel.snippet.thumbnails.medium.url}
                      onLoad={this.imageFadeIn}
                      alt={channel.snippet.title}
                    />
                    <h1 className="d-none d-md-inline-block">{channel.snippet.title}</h1>
                  </div>
                </Link>
              </div>
            ))}

          </div>
        </section>
      </React.Fragment>
      );
    }
  }



  

}

export default Home;
