import React, { Component } from 'react';

class Conditional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      p: false
    };
    this.realDom = this.realDom.bind(this);
  }

  realDom() {
    if (this.state.p) {
      return <p>这里需要的是p标签</p>;
    }
    return <h3>这里需要的是h3标签</h3>;
  }

  render() {
    return (
      <div>
        <h2>来自条件判断组件</h2>
        { this.realDom() }
      </div>
    );
  }
}

export default Conditional;
