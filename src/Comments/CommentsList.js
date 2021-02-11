import React, { Component } from 'react';
import { PropTypes } from 'prop-types'
import Comment from './Comment';

class CommentsList extends Component {

  static propTypes = {
    delete: PropTypes.func.isRequired,
    comments: PropTypes.array,
  };

  static defaultProps = {
    comments: [],
  }

  constructor(props) {
    super(props);
  }

  render () {
    const { comments } = this.props;

    const deleteComment = (index) => {
      this.props.delete(index);
    }

    return (
      <div>
      {comments.map(
        (comment, index) => {
          return (
            <Comment
              key={index}
              author={comment.author}
              message={comment.message}
              date={comment.date}
              time={comment.time}
              delete={deleteComment}
            />
          );
        })
      }
      </div>
    );
  }
}

export default CommentsList;
