import React from 'react';

class FrenchMessage extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        // this.state = {
        //     frenchMessage: "Bonjour"
        // };
    }
    handleChange(e) {
        this.props.onMessageChange(e.target.value);
    }
    render() {
        return(
            <fieldset>
                <legend>entrer un message:</legend>
                <input onChange={this.handleChange} />
                {/* B E F O R E */}
                {/* <h3>Message: {this.state.frenchMessage}</h3> */}
                {/* A F T E R */}
                <h3>Message: {this.props.message}  ... in french</h3>
            </fieldset> 
        )
    }
}

class SpanishMessage extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        // this.state = {
        //     spanishMessage: 'Hola'
        // }
    }
    handleChange(e) {
        this.props.onMessageChange(e.target.value);
    }
    render() {
        return(
            <fieldset>
                <legend>ingresar mensaje:</legend>
                <input onChange={this.handleChange} />
                {/* B E F O R E */}
                {/* <h3>Message: {this.state.spanishMessage}</h3> */}
                {/* A F T E R */}
                <h3>Message: {this.props.message} ... in spanish</h3>
            </fieldset> 
        )
    }
}

class EnglishMessage extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        // this.state = {
        //     englishMessage: 'Hello'
        // }
    }
    handleChange(e) {
        this.props.onMessageChange(e.target.value);
    }
    render() {
        return(
            <fieldset>
                <legend>enter message:</legend>
                <input onChange={this.handleChange} />
                {/* B E F O R E */}
                {/* <h3>Message: {this.state.englishMessage}</h3> */}
                {/* A F T E R */}
                <h3>Message: {this.props.message} ... in english</h3>
            </fieldset> 
        )
    }
}

class MessageBotFixed extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            message: ''
        }
    }
    handleChange(e) {
        this.setState({message: e});
    }
    render() {
        return(
            <div>
                <EnglishMessage message={this.state.message} onMessageChange={this.handleChange} />
                <SpanishMessage message={this.state.message} onMessageChange={this.handleChange} />
                <FrenchMessage message={this.state.message} onMessageChange={this.handleChange} />
            </div>
        )
    }
}

export default MessageBotFixed;