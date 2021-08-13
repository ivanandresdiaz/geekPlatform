;

const initialState = {
  news: [],
};

export const socialGeekReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'getFirestoreNewsCategory':
      return {
        ...state,
        news: action.payload,
      };
    default:
      return state;
  }
};

export const getNewsCategory = (state) => state.socialGeek.news;
