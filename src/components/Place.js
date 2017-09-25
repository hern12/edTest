import React, { Component } from 'react';

class Place extends Component{

	render(){
		return(
			<div className="PlaceBox">
				<h2>-- Place --</h2>
				<div className="columns">
					<div className="column locate">
						<div className="pBox">
							59/16 ถ.จุติอนุสรณ์ อ.หาดใหญ่ จ.สงขลา <br/>เทศบาลนครหาดใหญ่ 90110
						</div>
					</div>
					<div className="column map">
						
					</div>
				</div>
			</div>
		);
	}

}

export default Place;