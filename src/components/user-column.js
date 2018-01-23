import React from 'react';
import {connect} from 'react-redux';
import { fetchProtectedData } from '../actions/protected-data';
import { fetchStudentData } from '../actions/students';
//import moment from 'moment';

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
      <div className="user-column">
        <h1>User Column</h1>
        <img src="https://cdn7.bigcommerce.com/s-fkt3i18h/product_images/uploaded_images/reading.png?t=1516737669&_ga=2.25683967.332062381.1516737598-1817016180.1514945206"></img>
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
