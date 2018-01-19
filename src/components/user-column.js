import React from 'react';
import {connect} from 'react-redux';
import { fetchProtectedData } from '../actions/protected-data';
import { fetchStudentData } from '../actions/students';
import moment from 'moment';

export class UserColumn extends React.Component {
  constructor(props){
    super(props);
    
  }
  
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
    this.props.dispatch(fetchStudentData());
  }

  newButtonClick = e => {
      this.props.updateNewParentState()
  }

  upcomingButtonClick = e => {
    this.props.updateUpcomingParentState()
  }

  gradesButtonClick = e => {
      this.props.updateUpcomingParentState()
  }

  resetButtonClick = e => {
    this.props.updateResetParentState()
  }
    render() {
      if (!this.props.student) {
        return <h1>Loading....</h1>;
      }
        return (
      <div>
        <h1>User Column</h1>
        <img src="https://assets-jpcust.jwpsrv.com/thumbs/3Gz5D0sR-720.jpg"></img>
        <h2>{`Hello ${this.props.username}`}</h2>
        <button
          onClick={this.newButtonClick}
        >New</button>
        <button
          onClick={this.upcomingButtonClick}
        >Upcoming</button>
        <button
          onClick={this.gradesButtonClick}
        >Grades</button>
         <button
          onClick={this.resetButtonClick}
        >Reset</button>
        </div>
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
console.log(this.props, 'This.props')
export default connect(mapStateToProps)(UserColumn);
