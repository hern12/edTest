import React, { Component } from 'react';
import Ads from '../components/Ads.js';
import PopularMenu from '../components/PopularMenu.js'
import Gallery from '../components/Gallery.js'
import Place from '../components/Place.js'

class Home extends Component{
	render(){
		return(
			<div>
				<Ads />
				<PopularMenu />
				<Gallery isOpen="true"/>
				<Place />
			</div>
		);
	}
}

export default Home;