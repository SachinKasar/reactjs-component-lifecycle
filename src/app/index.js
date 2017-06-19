import React from "react";
import {render} from "react-dom";

import {TwoWheel} from "./components/TwoWheel";
import {FourWheel} from "./components/FourWheel";

class App extends React.Component {
	constructor () {
		super()
		this.state = {
			visitor:'XYZ',
			shouldMount:true
		}
		this.handleVisitor = this.handleVisitor.bind(this);
		this.handleMountOnChange = this.handleMountOnChange.bind(this);
	}
	
	greetCustomer() {
		alert("Hello");		
	}
	
	handleVisitor(name) {
		this.setState({
			visitor:name
		});		
	}
	
	handleMountOnChange() {
		this.setState({
			shouldMount:!this.state.shouldMount
		});	
	}
    
	
	render() {
		let twoWheelSpecs = {manufacturer : "Royal Enfield"};
		let fourWheelSpecs = {manufacturer : "Maruti Suzuki"};
		let twoWheelComponent = "";
		if(this.state.shouldMount) {
			twoWheelComponent = (<TwoWheel 
							       name="Enfield Classic" 
								   specs={twoWheelSpecs} 
								   price="0" ariom
								   greet={this.greetCustomer} 
								   visitor={this.state.visitor}
								   changeVisitor={this.handleVisitor}/>);
		}
		
        return ( 
			<div>
				 <div className="container">
					<div className="row">
						<div className="row">
						{twoWheelComponent}
						</div>
					</div>
				  </div>
				  <hr/>
				  <div className="container">
					<div className="row">
						<div className="row">
							<FourWheel 
								name="Grand Vitara" 
								specs={fourWheelSpecs} 
								visitor={this.state.visitor}/>
						</div>
					</div>
				  </div>
				  <br/><br/><button onClick={this.handleMountOnChange} className="btn btn-primary" >Mount/Unmount</button>
			  </div>
        );
    } 
}

render( < App / > , document.getElementById("app"));