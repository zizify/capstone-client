import {
  FETCH_TEACHER_DATA_REQUEST,
  FETCH_TEACHER_DATA_SUCCESS,
  FETCH_TEACHER_DATA_ERROR,
  FETCH_TEACHER_ASSIGNMENT_SUCCESS,
  FETCH_TEACHER_ASSIGNMENT_ERROR
} from '../actions/teachers';

const initialState = {
  data: {},
  loading: false,
  error: null
};

//----------------------------------------------------------------TEACHERS REDUCER-----------------------------------------------------------------

export default (state = initialState, action) => {
  if (action.type === FETCH_TEACHER_DATA_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === FETCH_TEACHER_DATA_SUCCESS) {
    return Object.assign({}, state, {
      data: action,
      loading: false,
      error: null
    });
  } else if (action.type === FETCH_TEACHER_DATA_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }
   else if (action.type === FETCH_TEACHER_ASSIGNMENT_SUCCESS) {
     let newData = {...state.data};
     newData.teacher.all = [...newData.teacher.all, action.newAssignment]
     return Object.assign({}, state, {
      data: newData,
      loading: false,
      error: null
    });
  } else if (action.type === FETCH_TEACHER_ASSIGNMENT_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }
  return state;
};
