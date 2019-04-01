import React, { Component, Fragment } from 'react';
import { Helmet } from "react-helmet";

import './Video.css';

class Video extends Component {

  constructor(props) {
    super(props);

    this.API_KEY = 'AIzaSyAv9SveXc91NBavZeo6xUjJ1Hl0xM81p8U';
    this.url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=' + this.props.match.params.videoId + '&key=' + this.API_KEY;


    this.state = {
      error: null,
      videoIsLoaded: false,
      videoItem: [],
    };

  }
 
  componentDidMount() {

    fetch(this.url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({ 
            videoIsLoaded: true,
            videoItem: result.items[0]
          });
        },
        (error) => {
          this.setState({
            videoIsLoaded: true,
            error
          });
        }
      )

  }

  render() {
        const { error, videoIsLoaded, videoItem } = this.state;

        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!videoIsLoaded) {
          return <div className="loader"></div>;
        } else {
          return(
          <React.Fragment>
            <Helmet>
              <meta charSet="utf-8" />
              <title>{videoItem.snippet.title + ' - Youtube University'}</title>
              <meta name="description" content={videoItem.snippet.title} />
              <meta name="author" content="pnhdevelopment" />
              <meta name="keywords" content="Youtube, University, Web development, Web design" />
            </Helmet>

            <section className="col-8 m-auto video-wrapper">  

              <h1 className="text-center">{videoItem.snippet.title}</h1>

              <div className="embed-responsive embed-responsive-16by9 mb-3">
                <iframe className="embed-responsive-item"
                src={`https://www.youtube.com/embed/${videoItem.id}`}
                allowFullScreen></iframe>
              </div>
              
              <div className="mb-2">
                <span className="mr-3">
                  <i className="far fa-calendar-alt"></i> { new Date(videoItem.snippet.publishedAt).toLocaleString('en-us', { day: 'numeric', month: 'long',year: 'numeric' }) }
                </span>

                <span>
                  <i className="far fa-calendar-alt"></i> {videoItem.statistics.viewCount} views
                </span>
              </div>

              <div className="mb-2">
                {videoItem.snippet.description}
              </div>
              
              {videoItem.snippet.tags.map((tag, index) => (
                <span className="tag" key={index}>{tag}</span>
              ))}

            </section>
          </React.Fragment>
          )
        }





  }

}

export default Video;
