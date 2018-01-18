import { API_BASE_URL } from '../config';

export const FETCH_STUDENT_DATA_REQUEST = 'FETCH_STUDENT_DATA_REQUEST';
const fetchStudentDataRequest = () => ({
  type: FETCH_STUDENT_DATA_REQUEST
});

export const FETCH_STUDENT_DATA_SUCCESS = 'FETCH_STUDENT_DATA_SUCCESS';
const fetchStudentDataSuccess = student => ({
  type: FETCH_STUDENT_DATA_SUCCESS,
  student
});

export const FETCH_STUDENT_DATA_ERROR = 'FETCH_STUDENT_DATA_ERROR';
const fetchStudentDataError = error => ({
  type: FETCH_STUDENT_DATA_ERROR,
  error
});

// Makes Fetch to Student Data Endpoint
export const fetchStudentData = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchStudentDataRequest());
  console.log('fetch student data working')
  fetch(`${API_BASE_URL}/assignments/student`,  {
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
    .then(student => dispatch(fetchStudentDataSuccess(student)))
    .catch(error => dispatch(fetchStudentDataError(error)));
};
