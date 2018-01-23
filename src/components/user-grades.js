import React from 'react';
import {connect} from 'react-redux';
import { fetchProtectedData } from '../actions/protected-data';
import { fetchStudentData } from '../actions/students';

export class UserGrades extends React.Component {
  constructor(props){
    super(props);
    
  }
  
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
    this.props.dispatch(fetchStudentData());
  }
  render(){
    return (
      <h1>Hello Grades</h1>
    )
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    student: state.students.data.student,
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data,
    loading: state.students.loading
  };
};
export default connect(mapStateToProps)(UserGrades);
