import React from 'react';
import PropTypes from 'prop-types';

class AddUserForm extends React.Component {
  firstRef = React.createRef();
  lastRef = React.createRef();
  emailRef = React.createRef();

  static propTypes = {
    addUser: PropTypes.func
  };

  createUser = event => {
    event.preventDefault();

    const user = {
      first: this.firstRef.value.value,
      last: this.lastRef.value.value,
      email: this.emailRef.value.value
    }
    this.props.addUser(user);

    event.currentTarget.reset();
  }

  render() {
    return (
      <form ref={(input) => this.userForm = input} className="user-edit" onSubmit={this.createUser}>
        <input name="first" ref={this.firstRef} type="text" placeholder="First Name" />
        <input name="last" ref={this.lastRef} type="text" placeholder="Last Name" />
        <input name="email" ref={this.emailRef} type="text" placeholder="Email Address" />
        <button type="submit">Add User</button>
      </form>
    )
  }
}

export default AddUserForm;
