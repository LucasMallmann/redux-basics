const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    const newState = Object.assign({}, state);
    newState.counter = state.counter + 1;
    return newState;
  }
  if (action.type === 'DECREMENT') {
    return {
      ...state,
      counter: state.counter - 1
    };
  }
  if (action.type === 'ADD') {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  if (action.type === 'SUB') {
    return {
      ...state,
      counter: state.counter - action.value
    };
  }
  if (action.type === 'STORE_RESULT') {
    return {
      ...state,
      results: state.results.concat({
        id: new Date(),
        value: state.counter
      })
    };
  }
  if (action.type === 'DELETE_RESULT') {
    const updatedArray = state.results
      .filter(result => result.id !== action.resultElementId)
    return {
      ...state,
      results: updatedArray
    };
  }
  return state;
}

export default reducer;