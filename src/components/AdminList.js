import React from 'react';
import PropTypes from 'prop-types';
import EditUserForm from './EditUserForm';
import AddUserForm from './AddUserForm';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class AdminList extends React.Component {
  static propTypes = {
    users: PropTypes.objectOf(
      PropTypes.shape({
        first: PropTypes.string,
        last: PropTypes.string,
        email: PropTypes.string,
      }).isRequired
    ).isRequired
  };

  render(){
    return (
      <div className="directory-list directory-list--admin">
        <h2 className="directory-list__title">Admin Directory</h2>
        <TransitionGroup component="div">
          {Object.keys(this.props.users).map(key => (
            <CSSTransition classNames="item" key={key} timeout={{ enter: 400, exit: 400 }}>
              <EditUserForm
                key={key}
                index={key}
                user={this.props.users[key]}
                updateUser={this.props.updateUser}
                deleteUser={this.props.deleteUser}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
        <AddUserForm addUser={this.props.addUser} />
      </div>
    )
  }
};

export default AdminList;
