import CONSTANTS from './../../../config/appConstants';

const initialState = {
  background: 'tomato',
  visible: true,
  fontSize: CONSTANTS.FONT_SIZE_VALUE,
  notificationDate: new Date(),
  setDueDetails: false,

  minDueWeeks: 2,
  maxDueWeeks: 40,
  minPeriodWeeks: 42,
};

const appReducer = (state = initialState, action) => {
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

export default appReducer;
