import { LOGIN_INIT } from './LoginActionType'

const initialState = {
  name: '',
  email: '',
  isLoggedIn: false,
}

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_INIT:
      return {
        ...state,
        name: 'Tuhin Khan',
      }
    default:
      return state
  }
}

export default LoginReducer
