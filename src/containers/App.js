import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Footer from '../components/Footer';

/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
export class App extends Component {
  render() {
    // we can use ES6's object destructuring to effectively 'unpack' our props
    const { children } = this.props;
    return (
      <div className="main-app-container">
        <div className="main-app-nav">Simple Redux Boilerplate</div>
        {/* notice that we then pass those unpacked props into the Counter component */}
        {children}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};

export default connect()(App);
