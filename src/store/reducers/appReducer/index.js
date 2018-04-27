import CONSTANTS from './../../../config/appConstants';

const initialState = {
  background: 'tomato',
  visible: true,
  fontSize: CONSTANTS.FONT_SIZE_VALUE,
  notificationDate: new Date(),
  setDueDetails: false
};

const appContentReducer = (state = initialState, action) => {
  switch (action.type) {

  case 'SET_IN_CACHE':
    return {
      ...state,
      fontSize: action.value
    };

  default:
    return state;
  }
};

export default appContentReducer;
