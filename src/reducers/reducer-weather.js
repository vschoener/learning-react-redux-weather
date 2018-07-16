import { TYPES } from '../actions';

export default function(state = [], action) {

  if (action.type === TYPES.FETCH_WEATHER && action.payload.request.status === 200) {
    return state.concat(action.payload.data);
  }

  return state;
}
