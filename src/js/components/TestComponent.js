import React from "react"
import ReactDOM from "react-dom"

var outputArray = new Array()

export default class TestComponent extends React.Component{
	render(){

		return(
			<div className="container">
				<hr/>
				<h2>Redux-Saga MiddleWare</h2>
				<div>
					<button id="inc" onClick={ () => this.props.incButtonClicked() }>
						Click to increment counter async
					</button>
					<button id="fail-inc" onClick={ () => this.props.failingIncButtonClicked() }>
						Click to try failing increment
					</button>
				</div>
				<hr/>
				<div>
					<div>
						Value: { this.props.value }
					</div>
					<div>
						Fetching: { this.props.fetching ? 'true' : 'false' }
					</div>
					<div>
						Error: { this.props.error }
					</div>
				</div>
				<hr/>
			</div>
		);
	}
}
