import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';
import HeaderNav from './header-nav';
import  StudentDashboard  from './students/student-dashboard';
import { TeacherDashboard } from './teachers/teacher-dashboard';


export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

    newButtonClick = e => {
    }
  render() {
    if (!this.props) {
      console.log('InLoadingMode Dashboard', this.props)
      return <h1>Loading....</h1>;
    }

    const dashboard = () => {
      if (this.props.isTeacher) {
        return <TeacherDashboard />
      }
      else {
        return <StudentDashboard />
      }
    }


    return (
      <div className="dashboard">
        <HeaderNav />
        {dashboard()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data,
    currentUser: state.auth.currentUser
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
