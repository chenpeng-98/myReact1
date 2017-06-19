import React, { Component } from 'react';

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ` ${new Date()}`,
      s: 0
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextProps, nextState);
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log(nextProps, nextState);
  // }

  componentDidMount() {
    this.timerID1 = setInterval(() => {
      this.setState({
        date: ` ${new Date()}`
      });
    }, 1000);

    this.timerID2 = setInterval(() => {
      this.setState((prevState, props) => ({
        s: prevState.s + props.step
      }));
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID1);
    clearInterval(this.timerID2);
  }

  render() {
    return (
      <div>
        <hr />
        <h2>来自Lifecycle组件</h2>
        <p>现在时刻：{ this.state.date }</p>
        <p>State Updates May Be Asynchronous: { this.state.s }</p>
      </div>
    );
  }
}

export default Lifecycle;
