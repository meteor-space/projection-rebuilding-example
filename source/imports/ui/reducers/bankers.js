const initialState = {
  bankersCount: 0
}

export default bankers = (state = initialState, action) => {
  let bankersCount = state.bankersCount;
  switch (action.type) {
    case 'ADD_BANKER':
      bankersCount++;
      break;
    case 'REMOVE_BANKER':
      if (bankersCount > 0) bankersCount--;
  }
  return Object.assign({}, state, { bankersCount: bankersCount });
}