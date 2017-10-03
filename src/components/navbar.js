import React, { Component } from 'react';
import logo from '../images/logo.png';
import { SocialIcon } from 'react-social-icons';
import {
	BrowserRouter as Router,
	Route,
	Link
  } from 'react-router-dom'

class Navbar extends Component {
	render() {
	  return (
			<div className="header is-fixed-top">
				<nav className="navbar is-" role="navigation" aria-label="main navigation">
					<div className="navbar-brand">
						<a className="navbar-item" href="http://bulma.io">
							<img src={logo}  width="112" height="28"/>
						</a>
					</div>
					<div className="navbar-start">
						<Link className="navbar-item " to="/">
							<span className="bd-emoji"><i className="fa fa-home"></i> </span>
							Home
						</Link>
						<Link className="navbar-item " to="/Menu">
							<span className="bd-emoji"><i className="fa fa-book"></i> </span>
							Menu
						</Link>
						<Link className="navbar-item " to="/">
							<span className="bd-emoji"><i className="fa fa-picture-o"></i> </span>
							Gallery
						</Link>
						<Link className="navbar-item " to="/about">
							<span className="bd-emoji"><i className="fa fa-users"></i> </span>
							About
						</Link>
						<Link className="navbar-item "to="/">
							<span className="bd-emoji"><i className="fa fa-phone"></i> </span>
							Contact
						</Link>
					</div>
					<div className="navbar-end">
						<div className="navbar-item is-hidden-desktop-only socialPad" target="_blank">
							<span className="icon">
								<SocialIcon url="https://www.facebook.com/endlesssoftserve" style={{ height: 100, width: 100 }} network="facebook" />
							</span>
						</div> 
						<div className="navbar-item is-hidden-desktop-only socialPad"target="_blank">
							<span className="icon">
								<SocialIcon url="https://www.instagram.com/endlesssoftserve/" color="#FC6042" style={{height: 100, width: 100 }} network="instagram" />
							</span>
						</div> 
					</div>
						<button className="button navbar-burger">
							<span></span>
							<span></span>
							<span></span>
						</button>
				</nav>
			</div>
	  );
	}
}
  
export default Navbar;