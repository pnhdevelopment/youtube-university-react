import React, { Component } from 'react';
import { withRouter, BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import '../Header/Header.css';
import logo from '../assets/logo.svg'; 

// import { withRouter } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
  }

  toggleButton(el){
    document.querySelector('.circle.icon').classList.toggle("closed");

    // el.target.classList.toggle("closed");
    document.querySelector('#mobileNavbar').classList.toggle("reveal");
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.history.push({
      pathname: '/search',
      search: '?q=' + e.target.querySelector('input').value
    });
  }

  render() {
      return (
        <div className="mb-3" id="navWrapper">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <Link to="/">
             <img className="logo" src={logo} />
            </Link>

             <div id="wrapper" className="d-lg-none" onClick={this.toggleButton} >
              <div className="circle icon">
                <span className="line top"></span>
                <span className="line middle"></span>
                <span className="line bottom"></span>
              </div>
            </div>

            <div className="ml-auto d-lg-inline-block d-none" id="navbarSupportedContent">
              <form className="form-inline my-2 my-lg-0 ml-auto" onSubmit={this.handleSubmit.bind(this)}>
                <input
                  className="form-control mr-sm-2"
                  type="search" placeholder="Search" aria-label="Search"
                  name="q"
                />
                <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
            
          </nav>


          {/* Mobile nav menu */}
          <div id="mobileNavbar" className="d-lg-none">
            <form className="w-100 p-3 my-2 my-lg-0" onSubmit={this.handleSubmit.bind(this)}>
              <input
                className="form-control mb-2 mr-sm-2"
                type="search" placeholder="Search" aria-label="Search"
                name="q"
                />
              <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>

      );
  }

}

export default withRouter(Header);

// export default Header;





