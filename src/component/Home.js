// src/Home.js
import React, { Component } from 'react';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedOut: false  // Track if the user has logged out
    };
  }

  // Function to handle logout
  handleLogout = async () => {
    try {
      await signOut(auth);
      this.setState({ isLoggedOut: true });
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  render() {
    const { isLoggedOut } = this.state;

    // Redirect to login page if logged out
    if (isLoggedOut) {
      return <Navigate to="/" />;
    }

    return (
      <div className="home-container">
        <h1>Welcome to the Home Page!</h1>
        <p>Congratulations on successfully logging in.</p>
        
        
        
        <button onClick={this.handleLogout} className="logout-button">Logout</button>
      </div>
    );
  }
}

export default Home;
