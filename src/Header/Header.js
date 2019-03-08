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
    el.target.classList.toggle("closed");
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
        <nav className="navbar navbar-expand-lg mb-3 navbar-dark">
          <Link to="/">
           <img className="logo" src={logo} />
          </Link>

           <div id="wrapper" className="d-lg-none" onClick={this.toggleButton}>
            <div className="circle icon">
              <span className="line top"></span>
              <span className="line middle"></span>
              <span className="line bottom"></span>
            </div>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <form className="form-inline my-2 my-lg-0 ml-auto" onSubmit={this.handleSubmit.bind(this)} >
              <input
                className="form-control mr-sm-2"
                type="search" placeholder="Search"
                name="q" />
              <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      );
  }

}

export default withRouter(Header);

// export default Header;





