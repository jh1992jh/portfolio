import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';

class NavDropdownMenu extends Component {
    state = {
        navOpen: false
      }
    
      toggleNav = () => {
        const { navOpen } = this.state;
    
        this.setState({navOpen: !navOpen});
      }
  render() {
    const { navOpen } = this.state;

    return (
        <Fragment>
        <div  className="menu" onMouseEnter={this.toggleNav} onClick={this.toggleNav}>
        <i className="fas fa-bars" />
        </div>
        {navOpen ? (
          <nav  className="navMenu" onMouseLeave={this.toggleNav}>
          <Link to="/" onClick={this.toggleNav}>
            <div className="navLink" >
            <span><i className="fas fa-home" /></span>
            </div>
            </Link>
            <Link to="/about" onClick={this.toggleNav}>
            <div className="navLink">
            <span>About <br /> me</span>
            </div>
            </Link>
            <a href="https://github.com/jh1992jh" target="_blank"  rel="noopener noreferrer" onClick={this.toggleNav}>
            <div className="navLink">
            <span><i className="fab fa-github" /></span>
            </div>
            </a>
          </nav>
        ) : null}
        </Fragment>
    )
  }
}

export default NavDropdownMenu;