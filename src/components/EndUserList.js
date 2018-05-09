import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
        <TransitionGroup component="div">
          {Object.keys(this.props.users).map(key => (
            <CSSTransition classNames="item" key={key} timeout={{ enter: 400, exit: 400 }}>
              <div className="user" key={key}>
                <a className="user__mailto" href={`mailto:${this.props.users[key].email}`}>
                  <button className="user__email button _icon-mail">Send Email</button>
                </a>
                <div className="user__info">
                  <span className="_bold">Name</span>: {this.props.users[key].first} {this.props.users[key].last}<br />
                  <span className="_bold">Email</span>: {this.props.users[key].email}
                </div>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    )
  }
};

export default EndUserList;
