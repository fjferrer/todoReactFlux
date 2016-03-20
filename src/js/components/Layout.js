import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';

export default class Layout extends Component {
	constructor() {
		super();
		this.title = 'constructor';
	}
	getVal(val) {
		return "function with value = " + val;
	}

	render() {
		const name = "me";
		var list = [
				<Footer />,
				<Footer />,
				<Footer />,
		];
		return (
			<div>
				<Header />
				<h2>It's {name}!</h2>
				<h2>It's a {this.getVal(1)}!</h2>
				<h2>It's the {this.title}!</h2>
				{list}
			</div>
		);
	}
}