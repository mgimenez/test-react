import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Example 1
 * Renders & Properties
 */
class AppOne extends React.Component {

	render() {
//		return <h1>Hello</h1>
// 		return React.createElement('h1', null, 'Hello')
//		return (
//			<div>
//				<h1>Hello</h1>
//				<h2>Word</h2>
//			</div>
//		);
		let txt = this.props.txt
		return (
			<div>
			<h1>{txt}</h1>
			</div>
		);
	}
}

// const AppOne = () => <h1>Hello</h1>

AppOne.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}

AppOne.defaultProps = {
	txt: 'This is the default txt'
}

ReactDOM.render(
	<AppOne cat={5} />,
	document.getElementById('app')
);

// export default AppOne

/**
 * Example 2
 * State Basics
 */
class AppTwo extends React.Component {
	constructor() {
		super();
		this.state = {
			txt: 'This is the state txt',
			cat: 0
		}
	}

	update(e) {
		this.setState({txt: e.target.value})
	}

	render() {
		return (
			<div>
			<input type="text"
				onChange={this.update.bind(this)} />
			<h1>{this.state.txt}</h1>
			</div>
		);
	}
}


ReactDOM.render(
	<AppTwo cat={5} />,
	document.getElementById('app')
);

// export default AppTwo

/**
 * Example 3
 * Owner Ownee Relationship
 */
class AppThree extends React.Component {
	constructor() {
		super();
		this.state = {
			txt: ''
		}

		this.update = this.update.bind(this)
	}

	update(e) {
		this.setState({txt: e.target.value})
	}

	render() {
		return (
			<div>
				<Widget txt={this.state.txt} update={this.update} />
				<Widget txt={this.state.txt} update={this.update} />
				<Widget txt={this.state.txt} update={this.update} />
				<Widget txt={this.state.txt} update={this.update} />
			</div>
		);
	}
}

const Widget = (props) => {
	return (
		<div>
		<input type="text"
			onChange={props.update} />
		<h1>{props.txt}</h1>
		</div>
	)
}

ReactDOM.render(
	<AppThree cat={5} />,
	document.getElementById('app')
);

export default AppTwo