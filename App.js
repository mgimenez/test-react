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

// export default AppThree


/**
 * Example 4
 * Using Refs to Access Components
 */
class AppFour extends React.Component {
	constructor() {
		super();
		this.state = {
			red: 0,
			green: 0,
			blue: 0
		}

		this.update = this.update.bind(this)
	}

	update(e) {
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
			green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
			blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
		})
	}

	render() {
		return (
			<div>
				{this.state.txt}
				<hr/>
				<Slider ref="red" update={this.update} />
				{this.state.red}
				<br/>
				<Slider ref="green" update={this.update} />
				{this.state.green}
				<br/>
				<Slider ref="blue" update={this.update} />
				{this.state.blue}
				<br/>
			</div>
		);
	}
}

class Slider extends React.Component {
	render() {
		return (
			<input ref="inp" type="range"
				min="0"
				max="255"
				onChange={this.props.update} />
		);
	}
}
ReactDOM.render(
	<AppFour cat={5} />,
	document.getElementById('app')
);

// export default AppFour

/**
 * Example 5
 * Accessing Child Properties
 */
class AppFive extends React.Component {
	render() {
		return <Button>I <Heart/> React</Button>
	}
}

class Button extends React.Component {
	render() {
		return <button>{this.props.children}</button>
	}
}

const Heart = () => <span className="glyphicon glyphicon-heart">LOVE</span>

ReactDOM.render(
	<AppFive cat={5} />,
	document.getElementById('app')
);

// export default AppFive


/**
 * Example  6
 * Component Life cycle - Mounting Basics
 */

class AppSix extends React.Component {
	constructor() {
		super();
		this.state = { val: 0 };
		this.update = this.update.bind(this);
	}

	update() {
		this.setState({val: this.state.val + 1})
	}
	
	componentWillMount() {
		console.log('mounting')
	}

	render() {
		console.log('rendering!')
		return <button onClick={this.update}>{this.state.val}</button>
	}

	componentDidMount() {
		console.log('mounted')
	}

	componentWillUnmount() {
		console.log('bye!')
	}
}

class Wrapper extends React.Component {
	constructor() {
		super();
	}

	mount() {
		ReactDOM.render (<AppSix />, document.getElementById('a'))
	}

	unmount() {
		ReactDOM.unmountComponentAtNode(document.getElementById('a'))
	}

	render() {
		return (
			<div>
				<button onClick={this.mount.bind(this)}>Mount</button>
				<button onClick={this.unmount.bind(this)}>Unmount</button>
				<div id="a"></div>
			</div>
		)
	}
}

export default Wrapper

ReactDOM.render(
	<Wrapper cat={5} />,
	document.getElementById('app')
);