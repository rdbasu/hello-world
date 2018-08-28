## Step 1

`robasu$ npx create-react-app hello-world`

## Step 2

`vscode -> File -> Open ... -> hello-world`

## Step 3

`View -> Terminal (or, control + ~)`

## Step 4

`robasu$ npm start`

#### You should see the default page on the browser at this point. 
#### Your initial set up is complete, and you are ready to R E A C T

## Step 5

`robasu$ rm -f src/*`

## Step 6
`cd src`

##Step 7

add a file named index.css in the src (_touch index.css_)
add a file named index.js in the src (touch _index.js_)

## Step 8

add the following lines to index.js

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
```

## Step 9
time for `hello world`

add the following lines to _index.js_

```
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```
npm start ... and voila ... `Hello, world!`

## Step 10 *JSX*

`JSX produces React “elements”.`

:exclamation: _React doesn’t require using JSX_

replace the lines above with the following -

```
const name = 'doesitmatter whoknows';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

:point_up: we declare a variable called name and then use it inside JSX by wrapping it in curly braces
_you can put any valid JavaScript expression inside the curly braces in JSX_

### JSX is an Expression Too

_After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects._
JSX can be used inside `if` `for` etc.

More on JSX `https://reactjs.org/docs/introducing-jsx.html`

## Step 11 *Rendering Elements*

_Elements are the smallest building blocks of React apps_

```
const element = <h1>Hello, world</h1>;
```

**Applications built with just React usually have a single root DOM node**

_to render a `React element` into a `root DOM` node, pass both to ReactDOM.render()_
```
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

_react elements are `immutable`_.
_the only way to update the UI is to `create a new element, and pass it to ReactDOM.render()`_

## Step 12 *Components and Props* (**THIS IS REACT**)

_split the UI into independent, reusable pieces_ use **COMPONENTS**

**Functional** and **Class** _Components_
:two_hearts: two ways to create a *r e a c t* component

- _Functional Component_
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

- _Class Component_
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
once you create the :point_up: _component_ *render it* :point_down:
```
ReactDOM.render(
    <Welcome name="doesitmatter whoknows" />, 
    document.getElementById('root')
);
```
pass `{name: 'doesitmatter whoknows'}` as the props

## Step 13 *Composing Components*

a REACT application is an _amalgamation_ of *multiple components* _intertwined_ with each other - _rdbasu_

* component A

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

* component B 

```
function App() {
  return (
    <div>
      <Welcome name="doesitmatter whoknows" />
      <Welcome name="doesitmatter whocares" />
    </div>
  );
}
```
* render the _outermost_ component

```
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```
:exclamation: - _all React components must act like pure functions with respect to their props_
