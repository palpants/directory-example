import React from 'react';
import PropTypes from 'prop-types';

class EditUserForm extends React.Component {
  static propTypes = {
    user: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string,
      email: PropTypes.string,
    }),
    index: PropTypes.string,
    updateUser: PropTypes.func
  };

  handleChange = event => {
    const updatedUser = {
      ...this.props.user,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateUser(this.props.index, updatedUser);
  };

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
