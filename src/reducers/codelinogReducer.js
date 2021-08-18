const initialState = {
  codelingoAllChallenges: [],
  challengesToScore: [],
  categoryCodelingo: [],
};

export const codelingoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addFirestoreNewCodelingoChallenge':
      return {
        ...state,
        codelingoChallenges: [action.payload, ...state.codelingoChallenges],
      };
    case 'getFirestoreAllCodelingoChallenges':
      return {
        ...state,
        codelingoAllChallenges: action.payload,
      };
    case 'deleteFirestoreCodelingoChallenge': {
      const newCodelingoAllChallenges = state.codelingoAllChallenges.filter((item) => item.id !== action.payload);
      return {
        ...state,
        codelingoAllChallenges: newCodelingoAllChallenges,
      }; }
    case 'getCategoriesCodelingoChallenges':
      return {
        ...state,
        codelingoCategories: action.payload,
      };
    case 'getCategoryCodelingo':
      return {
        ...state,
        codelingoCategory: action.payload,
      };
    case 'getCodelingoChallengesToScore':
      return {
        ...state,
        challengesToScore: action.payload,
      };

    default:
      return state;
  }
};

export const getCodelingoAllChallenges = (state) => state.codelingo.codelingoAllChallenges;
export const getChallengesToScore = (state) => state.codelingo.challengesToScore;
export const getCodelingoCategories = (state) => state.codelingo.codelingoCategories;
export const getCategoryCodelingo = (state) => state.codelingo.codelingoCategory;
