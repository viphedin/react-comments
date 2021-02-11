import React, { Component } from 'react';
import { PropTypes } from 'prop-types'
import CommentsList from './CommentsList';
import CommentForm from './CommentForm';

class CommentsWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    }
  }

  componentDidMount() {
    this.loadComments();
  }

  async loadComments() {
    const data = localStorage.getItem('widget.comments');

    if (data) {
      const comments = JSON.parse(data);
      this.setState({ comments: comments });
      this.forceUpdate();
    }
  }

  async saveComments(comments) {
    const data = JSON.stringify(comments);

    localStorage.setItem('widget.comments', data);
  }

  render() {
    let updateComments = (comment) => {
      const { comments } = this.state;

      comments.push(comment);

      this.saveComments(comments);

      this.setState({ comments: comments });
      this.forceUpdate();
    }

    let deleteComment = (index) => {
      const { comments } = this.state;

      const newComments = comments.splice(index, 1);

      this.saveComments(newComments);

      this.setState({ comments: newComments });
      this.forceUpdate();
    }

    const { comments } = this.state;

    return (
      <div>
        <CommentsList
          comments={comments}
          delete={deleteComment}
        />
        <CommentForm
          updateComments={updateComments}
        />
      </div>
    );
  }
}

export default CommentsWidget;
