import moment from 'moment';

const initialState = {
  // dueDate: new Date(),
  dueDate: moment('25-May-2018', 'DD-MMMM-YYYY').format('DD-MMMM-YYYY'),
  startDate: moment('25-May-2018').subtract(40, 'w').format('DD-MMMM-YYYY')
};

const appContentReducer = (state = initialState, action) => {
  switch (action.type) {

  case 'SET_DUE_DATE':
    return {
      ...state,
      dueDate: action.payload,
      startDate: action.payload
      ? moment(action.payload).subtract(40, 'w').format('DD-MMMM-YYYY')
      : ''
    };

  default:
    return state;
  }
};

export default appContentReducer;
