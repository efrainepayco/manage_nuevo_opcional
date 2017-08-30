import React, {Component} from 'react'
import {Breadcrumb} from 'reactstrap'

export default class Bread extends Component {
	render() {
		return(
			<div>
				<Breadcrumb>
					<h4 className="pull-left">Dashboard</h4>
				</Breadcrumb>
			</div>
		)
	}
}
