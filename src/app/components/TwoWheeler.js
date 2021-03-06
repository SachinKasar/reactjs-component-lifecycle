import React from "react";
import {render} from "react-dom";

// TwoWheel as a Class Component
export class TwoWheeler extends React.Component {
	constructor(props) {
		super();
	    this.title = "Two";
		this.state = {price:props.price, visitor:props.visitor}
		this.handlePriceOnClick = this.handlePriceOnClick.bind(this);
		this.handleVisitorOnClick = this.handleVisitorOnClick.bind(this);
        console.log("###.Inside the Constructor");
	}
	
	
	
	componentWillMount() {
        this.title += " Wheeler";
		console.log("1.componentWillMount");
	}
	
	componentDidMount() {
		console.log("2.componentDidMount");
	}
	
	componentWillReceiveProps(nextProps) {
		console.log("3.componentWillReceiveProps - " , nextProps);
	}
	
	shouldComponentUpdate(nextProps, nextState) {
		console.log("4.shouldComponentUpdate - " , nextProps, nextState);
		return true;
	}
	
	componentWillUpdate(nextProps, nextState) {
		console.log("5.componentWillUpdate - " , nextProps, nextState);
	}
	
	componentDidUpdate(prevProps, prevState) {
		console.log("6.componentDidUpdate - " , prevProps, prevState);
	}
	
	componentWillUnmount() {
		console.log("7.componentWillUnmount - ");
	}
	
	
	
	handlePriceOnClick() {
		this.setState({price:'Rs. 100000'});
		console.log('New Price');
	}
	
	handleVisitorOnClick() {
		this.props.changeVisitor("New Visitor");
		console.log('New Visitor');
	}
	
	handleOnChange(event) {
			this.setState({
				visitor:event.target.value
			})
            
            setTimeout(
				() => {
					this.props.changeVisitor(this.state.visitor);
				}
				,2000
			);
			  
	}
	
    render() {    
        console.log('### Inside Component - Render()');
        return ( 
		    <div  className="alert alert-warning" >
						<h1 style={{color:'blue'}}> {this.title} </h1>
						<ul>
							<li>
								<b>Name :</b> {this.props.name}
							</li>
							<li>
								<b>By :</b> {this.props.specs.manufacturer}
							</li>
							
							<li>
								<b>Price :</b> {this.state.price}
							</li>
							<li>
							<b>Visitor :</b>  {this.props.visitor}
							</li>
							
						</ul>
						 
						 <b>New Visitor : </b><input type="text" value={this.state.visitor} onChange={(event) => this.handleOnChange(event) } />
						 <br/><br/><div className="btn-group btn-group-sm">
							<button onClick={this.handlePriceOnClick} className="btn btn-primary" >Get New Price</button>
						
							<button onClick={this.handleVisitorOnClick} className="btn btn-primary" >Change Visitor</button>
						 </div>
					
					</div>
				 
      
        );
    } 
}
