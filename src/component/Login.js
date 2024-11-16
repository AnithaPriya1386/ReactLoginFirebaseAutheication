// src/Login.js
import React, { Component } from 'react';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNewUser: false,
      email: '',
      password: '',
      error: '',
      isAuthenticated: false  // New state to track authentication
    };
  }

  //toggling bewteen login and signup
  toggleNewUser = () => {
    this.setState((prevState) => ({
      isNewUser: !prevState.isNewUser,
      error: ''
    }));
  };

  
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSignUp = async () => {
    const { email, password } = this.state;
    try {
      await createUserWithEmailAndPassword(auth, email, password);//firebase func
      alert('Sign up successful! You can now log in.');
      this.setState({ isNewUser: false, error: '' });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  handleLogin = async () => {
    const { email, password } = this.state;
    try {
      await signInWithEmailAndPassword(auth, email, password);//firebase func
      this.setState({ isAuthenticated: true });  // Set authenticated to true
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  render() {
    const { isNewUser, email, password, error, isAuthenticated } = this.state;

    // Redirect to Home if authenticated
    if (isAuthenticated) {
      return <Navigate to="/home" />;
    }

    return (
      <div>
          <h1 >Welcome to One Mobile Sellers</h1>
          <p className='p-content'>Find the best deals on mobile phones, explore the top sellers, and enjoy the best discounts!</p>
          <div className="login-container">
        <h2>{isNewUser ? 'Sign Up' : 'Login'}</h2>
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={email}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={this.handleChange}
        />
        {error && <p className="error-message">{error}</p>}
        <button onClick={isNewUser ? this.handleSignUp : this.handleLogin}>
          {isNewUser ? 'Sign Up' : 'Login'}
        </button>
        <p>
          {isNewUser ? 'Already have an account?' : 'New user?'}
        </p>
          <button onClick={this.toggleNewUser}>
            {isNewUser ? 'Login' : 'Sign Up'}
          </button>
      </div>
      </div>

    );
  }
}

export default Login;
