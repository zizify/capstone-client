import React from 'react';
import HeaderNav from './header-nav';
import UserColumn from './user-column';
import requiresLogin from './requires-login';
import ViewContainer from './view-container';
import { fetchStudentData } from '../actions/students';
import { fetchTeacherData } from '../actions/teachers';
import { fetchProtectedData } from '../actions/protected-data';
import { connect } from 'react-redux';

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: null
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
    this.props.user.isTeacher ? this.props.dispatch(fetchTeacherData()) : this.props.dispatch(fetchStudentData());
  }

  updateView = viewString => {
    this.setState({
      view: viewString
    });
  };
  render() {
    console.log(this.state)
    if (this.props.loading) {
      return <h2>Loading...</h2>;
    }

    return (
      <div className="root-content-wrapper">
        <HeaderNav />
        <div className="content-wrapper">
          <UserColumn 
            currentUser={this.props.user} 
            updateView={this.updateView}
          />
          <ViewContainer view={this.state.view} updateView={this.updateView} user={this.props.user} userdata={this.props.userdata}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    user: state.auth.currentUser,
    userdata: state.teachers.data.teacher || state.students.data.student,
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    loading: state.students.loading
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
