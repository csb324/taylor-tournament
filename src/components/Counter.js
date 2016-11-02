import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleCreateGame() {
    this.props.actions.createGame();
  }

  handleIncrement() {
    this.props.actions.increment();
  }

  handleDecrement() {
    this.props.actions.decrement();
  }

  handleRequest() {
    this.props.actions.setToSongCount();
  }

  render() {
    return (
      <div className="counter-container">
        <div className="counter-num-label">{this.props.counter}</div>
        {/* Below, the even or odd statement is simply used to demonstrate how one could
        easily use a ternary operator to conditionally show an 'even' or 'odd' string
        based on the counter's value on state. */}
        <div className="counter-even-label">{this.props.counter % 2 === 0 ? 'even' : 'odd'}</div>
        <br />
        <div className="counter-buttons">
          <button onClick={() => {this.handleDecrement();}}>-</button>
          <button onClick={() => {this.handleIncrement();}}>+</button>
          
          <button onClick={() => {this.handleRequest();}}>etc</button>
          <button onClick={() => {this.handleCreateGame();}}>new game</button>
          
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};
