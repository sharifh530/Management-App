import { CREATE_MEMBER, GET_MEMBER,EDIT_MEMBER } from "./MemberActionType";

const initialState = {
  members: [],
  editId:''
};

const MemberReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEMBER:
      return {
        ...state,
        members: action.payload,
      };

      case EDIT_MEMBER:
      return {
        ...state,
        editId: action.payload,
      };

    case CREATE_MEMBER:
      return {
        ...state,
        members: action.payload,
      };

    default:
      return state;
  }
};

export default MemberReducer;
