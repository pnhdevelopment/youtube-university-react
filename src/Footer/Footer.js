import React, { Component } from 'react';
import './Footer.css';
import reactjs from '../assets/reactjs.svg'; 


class Footer extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }


  render() {
      return (
        <footer className="container-fluid">

          <div className="row">
            <div className="col-md-8 col-12 text-center text-md-left">
              &copy; { new Date().getFullYear() } Youtube University 
            </div>
            
            <div className="col-md-4 col-12 text-center text-md-right">
              Built with <img src={reactjs} className="d-inline-block" />
            </div>
          </div>

        </footer>
      );
  }


}

export default Footer;
