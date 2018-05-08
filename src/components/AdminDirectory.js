import { connect } from 'react-redux'
import {
  addUser,
  updateUser,
  deleteUser
} from '../actions';
import AdminList from './AdminList';

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch => ({
  addUser: (key, user) => dispatch(addUser(key, user)),
  updateUser: (key, user) => dispatch(updateUser(key, user)),
  deleteUser: key => dispatch(deleteUser(key))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminList);
