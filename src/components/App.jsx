import React, { Component, PropTypes } from 'react';
import List from './List';
import Conditional from './Conditional';
import Lifecycle from './Lifecycle';
import MyForm from './Myform';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 123456789,
      lists: [1111, 2222, 3333, 4444, 5555]
    };
    this.changeNum = () => {
      if (this.props.num) {
        this.setState({ num: 666666666666 });
      }
    };
    this.handlerClick = this.handlerClick.bind(this);
  }

  componentDidMount() {
    if (this.state.num) {
      this.changeNum();
    }
  }

  componentWillUnmount() {
    console.log('GOOD BYE!');
  }

  handlerClick(e) {
    e.preventDefault();
    console.log(this.state.num);
  }

  render() {
    console.log('进入render：', this.state.num);

    return (
      <div>
        <p>初始状态值为：{ this.state.num }</p>
        <button onClick={this.handlerClick}>Handling Events</button>
        <hr />
        <List lists={this.state.lists} />
        <hr />
        <Conditional />
        <Lifecycle step={3} />
        <hr />
        <MyForm />
      </div>
    );
  }
}

App.propTypes = {
  num: PropTypes.number
};

export default App;
