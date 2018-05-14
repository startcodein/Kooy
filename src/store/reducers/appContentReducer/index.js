const initialState = {
  // dueDate: new Date(),
  // dueDate: moment('25-May-2018', 'DD-MMMM-YYYY').format('DD-MMMM-YYYY'),
  // startDate: moment('25-May-2018').subtract(40, 'w').format('DD-MMMM-YYYY')
};

const appContentReducer = (state = initialState, action) => {
  switch (action.type) {

  case 'SET_DUE_DATE':
    return {
      ...state,
      name: action.payload.name,
      startDate: action.payload.startDate,
      dueDate: action.payload.dueDate
    };

  case 'SET_HEADER_WEEK':
    return {
      ...state,
      headerWeek: action.payload
    };

  default:
    return state;
  }
};

export default appContentReducer;
