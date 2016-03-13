const initialState = {
  bankersCount: 0
}

export default bankers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BANKER':
      return { ...state, bankersCount: state.bankersCount + 1 };
    case 'REMOVE_BANKER':
      if (state.bankersCount > 0) {
        return { ...state, bankersCount: state.bankersCount - 1 }
      }
    default:
      return state;
  }
}