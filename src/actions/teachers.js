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
  console.log('fetch TEACHER data working')
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
