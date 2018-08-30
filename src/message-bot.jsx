import React from 'react';

class FrenchMessage extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            frenchMessage: "Bonjour"
        };
    }
    handleChange(e) {
        const translated = e.target.value + ' ... in french';
        this.setState({frenchMessage: translated})
    }
    render() {
        // const frenchMessage = this.props.frenchMessage;
        return(
            <fieldset>
                <legend>entrer un message:</legend>
                <input onChange={this.handleChange} />
                <h3>Message: {this.state.frenchMessage}</h3>
            </fieldset> 
        )
    }
}

class SpanishMessage extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            spanishMessage: 'Hola'
        }
    }
    handleChange(e) {
        const translated = e.target.value + ' ... in spanish';
        this.setState({spanishMessage: translated})
    }
    render() {
        return(
            <fieldset>
                <legend>ingresar mensaje:</legend>
                <input onChange={this.handleChange} />
                <h3>Message: {this.state.spanishMessage}</h3>
            </fieldset> 
        )
    }
}

class EnglishMessage extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            englishMessage: 'Hello'
        }
    }
    handleChange(e) {
        const translated = e.target.value + ' ... in english';
        this.setState({englishMessage: translated})
    }
    render() {
        return(
            <fieldset>
                <legend>enter message:</legend>
                <input onChange={this.handleChange} />
                <h3>Message: {this.state.englishMessage}</h3>
            </fieldset> 
        )
    }
}

class MessageBot extends React.Component {
    render() {
        return(
            <div>
                <EnglishMessage />
                <SpanishMessage />
                <FrenchMessage />
            </div>
        )
    }
}

export default MessageBot;