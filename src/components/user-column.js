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
      this.props.updateGradesParentState()
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
        <img src="https://www.google.com/imgres?imgurl=http%3A%2F%2Fphotos1.blogger.com%2Fblogger%2F7024%2F1859%2F1600%2FPicture%25201.0.jpg&imgrefurl=http%3A%2F%2Fcartoonsolutions.blogspot.com%2F2005%2F11%2Fclassroom-background.html&docid=LAk2MLz45uRBJM&tbnid=ucxksWiYLE6YqM%3A&vet=10ahUKEwiJ_f6Qm-zYAhVPba0KHQRaBh8QMwiuASgBMAE..i&w=610&h=458&bih=769&biw=952&q=cartoon%20classroom&ved=0ahUKEwiJ_f6Qm-zYAhVPba0KHQRaBh8QMwiuASgBMAE&iact=mrc&uact=8"></img>
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
