class App extends React.Component {
  render() {
    return <h2>Hello From React</h2>;
  }
}

class Paragraph extends React.Component {
  render() {
    return <p>Here is some information created by React</p>;
  }
}

class Time extends React.Component {
  render() {
	let now = new Date();
    return (
	<div>
	<p> The current time is: {now.toTimeString()} </p>
	</div>
)}}


ReactDOM.render( < App/>, document.getElementById('root'));
ReactDOM.render( < Paragraph/>, document.getElementById('para'));
ReactDOM.render( < Time/>, document.getElementById('time'));
