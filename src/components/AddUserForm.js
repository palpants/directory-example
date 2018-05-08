import React from 'react';
import PropTypes from 'prop-types';

class AddUserForm extends React.Component {
  static propTypes = {
    addUser: PropTypes.func
  };

  createUser = event => {
    event.preventDefault();

    const user = {
      first: this.firstRef.value,
      last: this.lastRef.value,
      email: this.emailRef.value
    }
    const key = `user${Date.now()}`;

    this.props.addUser(key, user);

    event.currentTarget.reset();
  }

  render() {
    return (
      <form className="user-edit user-edit--add-user" onSubmit={this.createUser}>
        <input className="user-edit__input" name="first" ref={input => this.firstRef = input} type="text" placeholder="First Name" />
        <input className="user-edit__input" name="last" ref={input => this.lastRef = input} type="text" placeholder="Last Name" />
        <input className="user-edit__input" name="email" ref={input => this.emailRef = input} type="text" placeholder="Email Address" />
        <button className="user-edit__submit button button--good _icon-plus" type="submit"></button>
      </form>
    )
  }
}

export default AddUserForm;
