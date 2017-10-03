import React, { Component } from 'react';
import mapPhoto from '../images/map.jpg';
class Place extends Component{

	render(){
		return(
			<div className="PlaceBox">
				<h2>-- Place --</h2>
				<div className="columns">
					<div className="column locate">
						<div className="pBox">
							59/16 ถ.จุติอนุสรณ์ อ.หาดใหญ่ จ.สงขลา <br/>เทศบาลนครหาดใหญ่ 90110
							<br/>
							<span>Facebook:</span><span><a href="https://www.facebook.com/endlesssoftserve/"> endlesssoftserve</a></span>
						</div>
					</div>
					<div className="column map">
						<img src={mapPhoto}/>
					</div>
				</div>
			</div>
		);
	}

}

export default Place;