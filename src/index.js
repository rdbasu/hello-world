import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MessageBot from './message-bot'
import MessageBotFixed from './message-bot-fixed'
import FunctionalComponent from './functional-component'
import ClassComponent from './class-component'

// UNCOMMENT EACH SECTION TO SEE THE RESULTS ON YOUR BROWSER

// ************************* S E C T I O N - I *************************

// Basic ... very basic REACT ***** START *****
// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// );
// Basic ... very basic REACT ***** START *****

// ************************* S E C T I O N - II *************************

// JSX ***** START *****
// const name = 'doesitmatter whoknows';
// const element = <h1>Hello, {name}</h1>;

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
// JSX ***** END *****

// ************************* S E C T I O N - III *************************

// Components & Rendering ***** START *****

// Functional Component & Rendering Component
// ReactDOM.render(
//     // call FunctionalComponent with *{name: 'functional component'}* as the props
//     <FunctionalComponent name="functional component" />, 
//     document.getElementById('root')
// );

// Class Component & Rendering Component
// ReactDOM.render(
//     // call ClassComponent with *{name: 'class component'}* as the props
//     <ClassComponent name="class component" />, 
//     document.getElementById('root')
// );

// Components & Rendering ***** END *****

// ************************* S E C T I O N - IV *************************

// Composing Components ***** START *****

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

// Composing Components ***** END *****

// ************************* S E C T I O N - V *************************

// State ***** START *****

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
// class Welcome extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'initial state'
//     };
//   }

//   render() {
//     return <h1>Hello, {this.state.name}</h1>
//   }
// }

// ReactDOM.render(
//   <Welcome />,
//   document.getElementById('root')
// );

// State ***** END *****

// ************************* S E C T I O N - VI *************************

// Lifting State Up ***** START *****

// {BEFORE} State is present in each on the individual components - message-bot.jsx 
// (file extensions - jsx & js are interchangeable ... js is the standard now)
// ReactDOM.render(
//     <MessageBot />,
//     document.getElementById('root')
// );

// {AFTER} State is in the parent now - message-bot-fixed.js
// ReactDOM.render(
//     <MessageBotFixed />,
//     document.getElementById('root')
// );

// Lifting State Up ***** END *****