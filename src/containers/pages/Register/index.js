import React, { Component } from 'react';
import './Register.scss';
import firebase from '../../../config/firebase';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChangeText = (e) => {
        // console.log(e.target.value)
        this.setState({
            [e.target.id]: e.target.value,
            [e.target.id]: e.target.value
        })
    }

    handleRegisterSubmit = () => {
        // console.log('email: ', this.state.email)
        // console.log('password: ', this.state.password)
        const { email, password } = this.state
        console.log('data sebelum di submit: ', email, password)
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log('success: ', userCredential)
                // Signed in
                var user = userCredential.user;
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode, errorMessage)
                // ..
            });
    }

    render() {
        return (
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Register Page</p>
                    <input className="input" placeholder="Email" type="text" id="email" onChange={this.handleChangeText} />
                    <input className="input" placeholder="Password" type="password" id="password" onChange={this.handleChangeText} />
                    <button className="btn" onClick={this.handleRegisterSubmit}>Register</button>
                </div>
                {/* <button>Go to Dashboard</button> */}
            </div>
        )
    }
}

export default Register;