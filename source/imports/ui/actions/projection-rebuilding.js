export const rebuildAccountsProjection = () => {
  return dispatch => Meteor.call('rebuildAccountsProjection');
};

export const rebuildTransactionsProjection = () => {
  return dispatch => Meteor.call('rebuildTransactionsProjection');
};
