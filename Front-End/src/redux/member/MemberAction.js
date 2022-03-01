import axios from 'axios'
import { memberCreate } from '../../api'
import { CREATE_MEMBER, GET_MEMBER, EDIT_MEMBER } from './MemberActionType'

export const getMember = (data) => {
  return {
    type: GET_MEMBER,
    payload: data,
  }
}

export const editMember = (data) => {
  return {
    type: EDIT_MEMBER,
    payload: data,
  }
}

export const addMember = (data) => {
  return (dispatch) => {
    dispatch({
      type: CREATE_MEMBER,
      payload: data,
    })
  }
}
