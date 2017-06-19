import React, { Component } from 'react';
import '../less/myForm.less';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0,
      num1: 0,
      num2: 0
    };
    this.onNumChange = this.onNumChange.bind(this);
  }

  onNumChange(e) {
    const o = e.target;
    const value = parseInt(o.value, 10) || 0;
    if (o.id === '1') {
      this.setState(prevState => ({
        num1: value,
        sum: value + prevState.num2
      }));
    } else if (o.id === '2') {
      this.setState(prevState => ({
        num2: value,
        sum: value + prevState.num1
      }));
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          id="1"
          value={this.state.num1}
          onChange={this.onNumChange}
        />
        <span className={'symbol'}>+</span>
        <input
          type="text"
          id="2"
          value={this.state.num2}
          onChange={this.onNumChange}
        />
        <span className={'symbol'}>=</span>
        <input type="text" readOnly placeholder="输入数据之和为：" value={this.state.sum} />
      </div>
    );
  }
}

export default MyForm;
