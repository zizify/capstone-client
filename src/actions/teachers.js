import { API_BASE_URL } from '../config';

export const FETCH_TEACHER_DATA_REQUEST = 'FETCH_TEACHER_DATA_REQUEST';
const fetchTeacherDataRequest = () => ({
	type: FETCH_TEACHER_DATA_REQUEST
});

export const FETCH_TEACHER_DATA_SUCCESS = 'FETCH_TEACHER_DATA_SUCCESS';
const fetchTeacherDataSuccess = teacher => ({
	type: FETCH_TEACHER_DATA_SUCCESS,
	teacher
});

export const FETCH_TEACHER_DATA_ERROR = 'FETCH_TEACHER_DATA_ERROR';
const fetchTeacherDataError = error => ({
	type: FETCH_TEACHER_DATA_ERROR,
	error
});

export const FETCH_TEACHER_ASSIGNMENT_SUCCESS = 'FETCH_TEACHER_ASSIGNMENT_SUCCESS';
const fetchTeacherAssignmentSuccess = newAssignment => ({
  type: FETCH_TEACHER_ASSIGNMENT_SUCCESS,
  newAssignment
});

export const FETCH_TEACHER_ASSIGNMENT_ERROR = 'FETCH_TEACHER_ASSIGNMENT_ERROR';
const fetchTeacherAssignmentError = error => ({
  type: FETCH_TEACHER_ASSIGNMENT_ERROR,
  error
});

// Makes Fetch to TEACHER Data Endpoint
export const fetchTeacherData = () => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	dispatch(fetchTeacherDataRequest());
	fetch(`${API_BASE_URL}/assignments/teacher`,  {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Bearer ${authToken}`}
	})
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(TEACHER => dispatch(fetchTeacherDataSuccess(TEACHER)))
		.catch(error => dispatch(fetchTeacherDataError(error)));
};

export const fetchTeacherComment = (e, student, id) => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	fetch(`${API_BASE_URL}/assignments/teacher/update/${id}`, {
		method: 'POST',
		body: JSON.stringify({
			student,
			pointsEarned: e.target.pointsEarned.value,
			comments: e.target.teacherComment.value
		}),
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Bearer ${authToken}`
		}
	});
};

export const fetchCreateNewAssignment = (e) => (dispatch, getState) => {
  const title = e.target.assignmentName.value;
  const subject = e.target.assignmentSubject.value
  const className = e.target.className.value
  const points = parseInt(e.target.pointsPossible.value, 10)
  const goals = e.target.objectives.value
  const instructions = e.target.instructions.value
  const assignDate = parseInt(e.target.assignDate.value, 10)
  const dueDate = parseInt(e.target.dueDate.value, 10)
  const authToken = getState().auth.authToken
  fetch(`${API_BASE_URL}/assignments/teacher`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      subject,
      className,
      points,
      goals,
      instructions,
      assignDate: {
    		weekday: assignDate,
    		date: assignDate
    	},
      dueDate: {
    		weekday: dueDate,
    		date: dueDate
    	},
      }),
      headers: {
        'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${authToken}`
      }
    }).then(res => {
      if(!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(result => dispatch(fetchTeacherAssignmentSuccess(result)))
    .catch(err => dispatch(fetchTeacherAssignmentError(err)))
}
