import { ON_OPEN } from '../actions/message-box';

const initialState = {
  isOpen: false,
  success: null,
  message: null,
};

const messageBox = (state = initialState, action) => {
  switch (action.type) {
    case ON_OPEN:
      return {
        isOpen: true,
        success: action.payload.success,
        message: action.payload.message,
        status: action.payload.status,
      };
    default:
      return state;
  }
};

export default messageBox;
