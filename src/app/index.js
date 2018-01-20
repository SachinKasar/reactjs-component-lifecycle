import React from "react";
import {render} from "react-dom";

import {TwoWheeler} from "./components/TwoWheeler";
import {FourWheeler} from "./components/FourWheeler";

class App extends React.Component {
	constructor () {
		super()
		this.state = {
			visitor:'Visitor 1',
			shouldMount:true
		}
		this.handleVisitor = this.handleVisitor.bind(this);
		this.handleMountOnChange = this.handleMountOnChange.bind(this);
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
			twoWheelComponent = (<TwoWheeler 
							       name="Enfield Classic" 
								   specs={twoWheelSpecs} 
								   price="0"  
								   visitor={this.state.visitor}
								   changeVisitor={this.handleVisitor}/>);
		}
		
        return ( 
			<div className="container">
                <div className="row col-xs-10 col-xs-offset-1 alert alert-success">
				    <br/>   
                    <div className="row">
                      <div className="col-xs-10 col-xs-offset-1" >
						{twoWheelComponent}
						</div>
					</div> <br/>
            
				   <div className="row">
                      <div className="col-xs-10 col-xs-offset-1" >
							<FourWheeler
                                 name="Enfield Classic" 
								   specs={fourWheelSpecs} 
								 price="500000"  
								visitor={this.state.visitor}
                                    />
						</div>
					</div>
					
					<div className="btn-group btn-group-sm">
						<button onClick={this.handleMountOnChange} className="btn btn-primary" >Mount/Unmount</button>
				    </div>
				  </div>
				  
			  </div>
        );
    } 
}

render( < App / > , document.getElementById("app"));
