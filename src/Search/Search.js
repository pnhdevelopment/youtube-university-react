import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import queryString from 'query-string';

import { createBrowserHistory } from 'history';


import './Search.css';



class Search extends Component {

  constructor(props){
    super(props);

    this.API_KEY = 'AIzaSyAv9SveXc91NBavZeo6xUjJ1Hl0xM81p8U';
    
    this.state = {
      q: null,
      error: null,
      searchIsLoaded: false,
      channelItems: [],
    };
    
  }


  performSearch(query){

    this.channelURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=' + query + '&key=' + this.API_KEY;

    fetch(this.channelURL)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            q: query,
            searchIsLoaded: true,
            channelItems: result.items
          });
        },
        (error) => {
          this.setState({
            searchIsLoaded: true,
            error
          });
        }
      )

  }

  componentDidUpdate(nextProps){
    if (nextProps.location !== this.props.location) {
      const values = queryString.parse(this.props.location.search);
      this.performSearch(values.q);
    }
  }


  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    this.performSearch(values.q);
  }


  imageFadeIn(el){
    el.target.style.opacity = 1;
  }


  render() {

    const { q, error, searchIsLoaded, channelItems } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!searchIsLoaded) {
      return <div className="loader"></div>;
    } else {
      return (
        <section className="container-fluid channel-wrapper">
          <h1>Search results for "{q}"</h1>
          <hr />
          <div className="row">
            {channelItems.map(item => (
              <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4" key={item.id.videoId}>
                <Link to={`/video/${item.id.videoId}`}>
                  <div className="wrapper mb-2">
                    <img
                      onLoad={this.imageFadeIn}
                      src={item.snippet.thumbnails.medium.url}
                      alt={item.snippet.title}
                    />
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

export default Search;
