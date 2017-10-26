import React, { Component } from 'react';
import StyleSheet from 'sheetjs';
import '../styles/LeadForm.css';

export class LeadForm extends Component {
    constructor() {
        super();

        this.state = {
            showThanks: false,
            name: '',
            email: ''
        };

        console.log(this.state.showThanks);
    }

    render() {
        return (
            <div id="leadFormContainer">
                <h3 style={{textAlign: 'center', fontSize: '3vh'}}>Learn to code on your phone</h3>
                <form id="inputContainer" onSubmit={this._handleFormSubmit.bind(this)}>
                    <input className="leadInput" type="text" name="name" placeholder="Name" autoCorrect="off"
                           autoCapitalize="words" onChange={this._onChange.bind(this)}/>
                        <br/>
                    <input className="leadInput" type="text" name="email" placeholder="Email" autoCorrect="off"
                           onChange={this._onChange.bind(this)}/>
                        <br/>
                    <input className="formButton" type="submit" value="Submit"/>
                </form>

                <p>
                    Sign up and become a GoCode early adopter. Receive programming tips and updates
                    on the upcoming <br/><b>GoCode app</b>.
                </p>

                {this._thanksText()}
            </div>
        );
    }

    _onChange(event) {
        const state = this.state;
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    _handleFormSubmit(event) {
        event.preventDefault();

        const { name, email } = this.state;

        this.setState({
            showThanks: true
        });
        console.log(this.state.showThanks);
        console.log(this.state.showThanks);
    }

    _thanksText() {
        if (this.state.showThanks) {
            return (
                <h1>
                    Thank you for becoming an early adopter!
                </h1>
            )
        }
    }
}