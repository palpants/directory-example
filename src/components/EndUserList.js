import React from 'react';
import PropTypes from 'prop-types';

class EndUserList extends React.Component {
  static propTypes = {
    user: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string,
      email: PropTypes.string,
    })
  };

  render(){
    return (
      <div className="directory-list directory-list--admin">
        <h2 className="directory-list__title">End User Directory</h2>
        {Object.keys(this.props.users).map(key => (
          <div className="user" key={key}>
            <a className="user__mailto" href="mailto:{this.props.users[key].email}">
              <button className="user__email button _icon-mail">Send Email</button>
            </a>
            <div className="user__info">
              <span className="_bold">Name</span>: {this.props.users[key].first} {this.props.users[key].last}<br />
              <span className="_bold">Email</span>: {this.props.users[key].email}
            </div>
          </div>
        ))}
      </div>
    )
  }
};

export default EndUserList;
