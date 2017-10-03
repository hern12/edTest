import React, { Component } from 'react';
import mapPhoto from '../images/map.jpg';
import { SocialIcon } from 'react-social-icons';
class Place extends Component{

	render(){
		return(
			<div className="PlaceBox">
				<h2>-- Place --</h2>
				<div className="columns">
					<div className="container">
						<div className="column map">
							<img src={mapPhoto}/>
						</div>
					{/* <div className="column locate">
						<div className="pBox">
							59/16 ถ.จุติอนุสรณ์ อ.หาดใหญ่ จ.สงขลา <br/>เทศบาลนครหาดใหญ่ 90110
							<br/>
							<span><SocialIcon className="socialMar" url="https://www.facebook.com/endlesssoftserve" style={{ height: 50, width: 50 }} network="facebook" /></span>
							<span><SocialIcon className="socialMar" url="https://www.instagram.com/endlesssoftserve/" color="#FC6042" style={{height: 50, width: 50 }} network="instagram" /></span>
						</div>
					</div> */}
					</div>
				</div>
			</div>
		);
	}

}

export default Place;