import React, { Component, FormEvent } from 'react';
import { PropTypes } from 'prop-types'

class CommentForm extends Component {

  static propTypes = {
     updateComments: PropTypes.func.isRequired
  };

  static defaultProps = {

  }

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      message: '',
    }
  }

  render () {
    const { name, message } = this.state;

    let handleNameText = (event) => {
      this.setState({ name: event.target.value });
    }

    let handleMessageText = (event) => {
      this.setState({ message: event.target.value });
    }

    let save = (e: FormEvent) => {
      e.preventDefault();

      const { name, message } = this.state;
      this.setState({ name: '', message: '' });

      const date = new Date();

      const comment = {
        author: name,
        message: message,
        date: date.toLocaleDateString(),
        time: ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2)
      };

      this.props.updateComments(comment);
    }

    return (
      <form onSubmit={save}>
        <label>Имя</label>
        <input type="text" name="name" value={name} onChange={handleNameText} />
        <br />
        <label>Комментарий</label>
        <textarea name="message" onChange={handleMessageText} value={message}></textarea>
        <br />
        <button>Добавить</button>
      </form>
    );
  }
}

export default CommentForm;
