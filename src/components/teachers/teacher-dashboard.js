import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../requires-login';
import { fetchProtectedData } from '../../actions/protected-data';
import HeaderNav from '../header-nav';

export class TeacherDashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    return (  
      <div className="dashboard">
            <HeaderNav />
        <div className="dashboard-username">
          Username: {this.props.username}
        </div>
        <h1 className="teacher-greeting"> Hi, {this.props.name} </h1>
        <h3 className="teacher-assignments">You may create assignments for your class here</h3>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(TeacherDashboard));
