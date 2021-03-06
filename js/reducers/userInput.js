import {
  SET_FOCUS,
  SET_BAND_FOCUS,
  SET_SCRUB_POSITION,
  UNSET_FOCUS,
  SET_USER_MESSAGE,
  UNSET_USER_MESSAGE
} from "../actionTypes";

const defaultUserInput = {
  focus: null,
  bandFocused: null,
  scrubPosition: 0,
  userMessage: null
};

export const userInput = (state = defaultUserInput, action) => {
  switch (action.type) {
    case SET_FOCUS:
      return { ...state, focus: action.input, bandFocused: null };
    case SET_BAND_FOCUS:
      return { ...state, focus: action.input, bandFocused: action.bandFocused };
    case UNSET_FOCUS:
      return { ...state, focus: null, bandFocused: null };
    case SET_SCRUB_POSITION:
      return { ...state, scrubPosition: action.position };
    case SET_USER_MESSAGE:
      return { ...state, userMessage: action.message };
    case UNSET_USER_MESSAGE:
      return { ...state, userMessage: null };
    default:
      return state;
  }
};

export default userInput;
