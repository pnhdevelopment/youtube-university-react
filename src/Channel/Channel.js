import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

import './Channel.css';


class Channel extends Component {

  constructor(props) {
    super(props);

    // console.log(this.props.match.params.channelId);

    this.API_KEY = 'AIzaSyAv9SveXc91NBavZeo6xUjJ1Hl0xM81p8U';
    this.channelURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=' +  this.props.match.params.channelId + '&key=' + this.API_KEY;

    this.state = {
      error: null,
      channelIsLoaded: false,
      channelItems: [],
    };

  }

  componentDidMount() {

     fetch(this.channelURL)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            channelIsLoaded: true,
            channelItems: result.items
          });
        },
        (error) => {
          this.setState({
            channelIsLoaded: true,
            error
          });
        }
      )

  }


  imageFadeIn(el){
    el.target.style.opacity = 1;
  }



  render() {

    const { error, channelIsLoaded, channelItems } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!channelIsLoaded) {
      return <div className="loader"></div>;
    } else {
      return (
        <section className="container-fluid channel-wrapper">
          <h1>{channelItems[0].snippet.channelTitle}</h1>
          <hr />
          <div className="row">
            {channelItems.map(item => (
              <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4" key={item.id.videoId}>
                <Link to={`/video/${item.id.videoId}`}>
                  <div className="wrapper mb-2">
                    <img onLoad={this.imageFadeIn} src={item.snippet.thumbnails.medium.url} />
                  </div>

                  <h2 className="mb-0">{item.snippet.title}</h2>
                  <i className="far fa-calendar-alt"></i>
                  <small>{ new Date(item.snippet.publishedAt).toLocaleString('en-us', { day: 'numeric', month: 'long',year: 'numeric' }) }</small>
                </Link>
              </div>
            ))}
          </div>
        </section>
      );
    }

    

  }
  

}



export default Channel;
