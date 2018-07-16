export default function(state = '', action) {
  if (action.type === 'UPDATE_TERM') {
    return action.payload;
  }

  return state;
}
