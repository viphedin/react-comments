import React, { Component } from 'react';
import { PropTypes } from 'prop-types'

class Comment extends Component {

  static propTypes = {
    delete: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render () {
    const { index, author, message, date, time } = this.props;

    const deleteComment = () => {
      this.props.delete(index);
    }

    return (
      <div onClick={deleteComment}>
        <span>Автор: {author}</span>
        <p>{message}</p>
        <span>{date}, {time}</span>
      </div>
    )
  }
}

export default Comment;
