export function setDueDate(date) {
  return {
    type: 'SET_DUE_DATE',
    payload: date
  };
}

export function setHeaderWeek(date) {
  return {
    type: 'SET_HEADER_WEEK',
    payload: date
  };
}
