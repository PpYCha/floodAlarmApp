import actionHelper from './actionHelper';

const actions = actionHelper();

const reducer = (state, action) => {
  switch (action.type) {
    case actions.UPDATE_USER:
      return {...state, currentUser: action.payload};

    case actions.RESET_USER:
      return {...state, currentUser: null};

      return {
        ...state,
        userAccount: {
          username: '',
          password: '',
        },
      };

    default:
      throw new Error('No matched action!');
  }
};

export default reducer;
