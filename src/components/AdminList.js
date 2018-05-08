import React from 'react';
import PropTypes from 'prop-types';
import EditUserForm from './EditUserForm';
import AddUserForm from './AddUserForm';

class AdminList extends React.Component {
  render(){
    return (
      <div className="directory-list directory-list--admin">
        <h2 className="directory-list__title">Admin Directory</h2>
        {Object.keys(this.props.users).map(key => (
          <EditUserForm
            key={key}
            index={key}
            user={this.props.users[key]}
            updateUser={this.props.updateUser}
            deleteUser={this.props.deleteUser}
          />
        ))}
        <AddUserForm addUser={this.props.addUser} />
      </div>
    )
  }
};

export default AdminList;
