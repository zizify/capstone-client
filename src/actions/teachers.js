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
export const fetchCreateNewClass = (e) => (dispatch, getState) => {
const userIds = e.target.usernames.value.split(', ')
const authToken = getState().auth.authToken
fetch(`${API_BASE_URL}/users/class/create`, {
  method: 'POST',
  body: JSON.stringify({
    className: e.target.name.value,
    userIds
    }),
  headers: {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: `Bearer ${authToken}`
    }
  })
}


export const fetchTeacherComment = (e, student, id) => (dispatch, getState) => {
  console.log('fetch post comment')
  const userIds = e.target.usernames.value.split(', ')
  const authToken = getState().auth.authToken
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
    })
  }

export const fetchCreateNewAssignment = (e) => (dispatch, getState) => {
const userIds = e.target.usernames.value.split(', ')
const authToken = getState().auth.authToken
fetch(`${API_BASE_URL}/users/class/create`, {
  method: 'POST',
  body: JSON.stringify({
    className: e.target.name.value,
    userIds
    }),
  headers: {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: `Bearer ${authToken}`
    }
  })
}
