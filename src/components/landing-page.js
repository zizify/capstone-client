import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import LoginForm from './login-form';
import Header from './header';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn && props.isTeacher) {
    return <Redirect to="/dashboard/teacher" />;
  }
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="container">
      <Header />
      {/* <Content /> */}
      {/* <Footer /> */}
      {/* <h5>Organizer + Planner + Report Card</h5>
      <h6>Paperless</h6>
      <h6>LogIn Here</h6> */}
    </div>
  );
}

const mapStateToProps = state => {
    const isTeacher = state.auth.currentUser ? state.auth.currentUser.isTeacher : false;
 return ({
    loggedIn: state.auth.currentUser !== null,
    isTeacher
  });
};

export default connect(mapStateToProps)(LandingPage);
