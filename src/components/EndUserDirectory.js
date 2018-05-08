import { connect } from 'react-redux'
import EndUserList from './EndUserList';

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps
)(EndUserList);
