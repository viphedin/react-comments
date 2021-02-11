import React, { Component } from 'react';
import { PropTypes } from 'prop-types'

class Comment extends Component {

  static propTypes = {
    delete: PropTypes.func.isRequired,
    index: PropTypes.number,
    author: PropTypes.string,
    message: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
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
      <div className="item">
        <span>Автор: {author}</span>
        <p>{message}</p>
        <span className="date">{date} {time}</span>
        <div className="delete" onClick={deleteComment}>Х</div>
      </div>
    )
  }
}

export default Comment;
