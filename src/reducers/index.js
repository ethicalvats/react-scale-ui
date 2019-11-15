import { ADD_USER } from "./constants";

const users = (state = [], action) => {
    switch (action.type) {
      case ADD_USER:
        return [
          ...state,
          {
              id: action.id,
              ...action.data
          }
        ]
      default:
        return state
    }
  }
  
  export default users