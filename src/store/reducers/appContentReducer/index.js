const initialState = {
  dueDate: new Date(),
};

const appContentReducer = (state = initialState, action) => {
  switch (action.type) {

  case 'SET_DUE_DATE':
    return {
      ...state,
      dueDate: action.payload
    };

  default:
    return state;
  }
};

export default appContentReducer;
