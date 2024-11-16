// src/component/Home.js
import React, { Component } from 'react';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import './HomePage.css'; // Custom styles for the Home page
import mob1 from './mob1.jpeg';
import mob2 from './mob2.jpeg';
import mob3 from './mob3.jpeg';

// const Home = () => {
class HomePage extends Component{

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

  
  render(){
    const { isLoggedOut } = this.state;

    // Redirect to login page if logged out
    if (isLoggedOut) {
      return <Navigate to="/" />;
    }

  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
      <button onClick={this.handleLogout} className="logout-btn">Logout</button>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#mobiles">Mobiles</a></li>
          <li><a href="#sellers">Sellers</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Landing Section */}
      <section className="landing">
        <h1>Welcome to the Mobile E-Sellers Platform</h1>
        <p>Browse the best mobile phones and offers from top sellers.</p>
      </section>

      {/* Mobile E-Sellers Content */}
      <section className="mobiles">
        <h2>Featured Mobile Phones</h2>
        <div className="mobile-list">
          <div className="mobile-card">
            <img src={mob1} alt="Mobile 1" />
            <h3>Mobile 1</h3>
            <p>Best features, great battery life, and more!</p>
            <button>Buy Now</button>
          </div>
          <div className="mobile-card">
            <img src={mob2} alt="Mobile 2" />
            <h3>Mobile 2</h3>
            <p>Stylish design, fast performance, and more!</p>
            <button>Buy Now</button>
          </div>
          <div className="mobile-card">
            <img src={mob3} alt="Mobile 3" />
            <h3>Mobile 3</h3>
            <p>Top-quality camera, high speed, and more!</p>
            <button>Buy Now</button>
          </div>
        </div>
      </section>

      {/* Sellers Section */}
      <section className="sellers">
        <h2>Top E-Sellers</h2>
        <ul>
          <li>Seller 1 - <span>Special Discount on Mobile 1</span></li>
          <li>Seller 2 - <span>Exclusive Deal on Mobile 2</span></li>
          <li>Seller 3 - <span>Flash Sale on Mobile 3</span></li>
        </ul>
      </section>
    </div>
  );
}
}

export default HomePage;
