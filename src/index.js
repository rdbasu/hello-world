import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Comment before Step 10
// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// );

// JSX START
// const name = 'doesitmatter whoknows';
// const element = <h1>Hello, {name}</h1>;

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
// JSX END

// Components & Rendering START

// Functional Component
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// Class Component
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// Rendering Component *Welcome*
// ReactDOM.render(
//     <Welcome name="doesitmatter whoknows" />, // call Welcome with *{name: 'doesitmatter whoknows'}* as the props
//     document.getElementById('root')
// );

// Components & Rendering END

// Composing Components START

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="doesitmatter whoknows" />
//       <Welcome name="doesitmatter whocares" />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// Composing Components END

// State START

// Before adding state
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// ReactDOM.render(
//   <Welcome name="doesitmatter whoknows"/>,
//   document.getElementById('root')
// );

// After adding state
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'initial state'
    };
  }

  render() {
    return <h1>Hello, {this.state.name}</h1>
  }
}

ReactDOM.render(
  <Welcome />,
  document.getElementById('root')
);

// State END