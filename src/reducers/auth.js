import {
    SET_AUTH_TOKEN,
    CLEAR_AUTH,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_ERROR,
    FETCH_TEACHER_CLASS_SUCCESS,
    FETCH_TEACHER_CLASS_ERROR
} from '../actions/auth';

const initialState = {
    authToken: null, // authToken !== null does not mean it has been validated
    currentUser: null,
    loading: false,
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === SET_AUTH_TOKEN) {
        return Object.assign({}, state, {
            authToken: action.authToken
        });
    } else if (action.type === CLEAR_AUTH) {
        return Object.assign({}, state, {
            authToken: null,
            currentUser: null
        });
    } else if (action.type === AUTH_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    } else if (action.type === AUTH_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            currentUser: action.currentUser
        });
    } else if (action.type === AUTH_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }

    else if (action.type === FETCH_TEACHER_CLASS_SUCCESS) {
      let newData = { ...state.currentUser }
      newData.classes = [...newData.classes, action.newClass]
      console.log('This is the state',state)
      console.log('This is the action', action)
      const newState = Object.assign({}, state, {
       currentUser: newData,
       loading: false,
       error: null
     });
     console.log('newState', newState)
     return newState;
   } else if (action.type === FETCH_TEACHER_CLASS_ERROR) {
     return Object.assign({}, state, {
       error: action.error,
       loading: false
     });
   }
    return state;
}
