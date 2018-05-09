import data from './../../../data/weekDetails.json';

export function getWeekDetails() {
    return {
      type: 'GET_WEEK_DETAILS',
      payload: data
    };
}
