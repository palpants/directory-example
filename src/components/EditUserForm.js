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
    updateUser: PropTypes.func,
    deleteUser: PropTypes.func
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
      <div ref={(input) => this.userForm = input} className="user-edit">
        <input className="user-edit__input" name="first" type="text" onChange={this.handleChange} value={this.props.user.first} />
        <input className="user-edit__input" name="last" type="text" onChange={this.handleChange} value={this.props.user.last} />
        <input className="user-edit__input" name="email" type="text" onChange={this.handleChange} value={this.props.user.email} />
        <button className="user-edit__submit button button--bad _icon-cancel" onClick={() => this.props.deleteUser(this.props.index)}>
        </button>
      </div>
    )
  }
}

export default EditUserForm;
