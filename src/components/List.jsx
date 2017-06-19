import React, { Component, PropTypes } from 'react';
import store from '../main';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    store.dispatch({
      type: 'numChanged',
      sum: 7778889999
    });
    const listItems = this.props.lists.map((val, order) =>
      <li key={order} style={{ color: 'red', font: "bold 18px/30px 'microsoft yahei'" }}>
        {val}
      </li>
    );
    return (
      <ul>
        { listItems }
        <li style={{ color: 'green' }}>来自redux：{ store.getState().changeSum.sum }</li>
      </ul>
    );
  }
}

List.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.number)
};

export default List;
