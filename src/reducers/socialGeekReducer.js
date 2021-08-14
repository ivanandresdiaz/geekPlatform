;

const initialState = {
  news: [],
  choosingWeekStudent: false,
  rankingStudentsGeekyPuntos: [],
};

export const socialGeekReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'getFirestoreNewsCategory':
      return {
        ...state,
        news: action.payload,
      };
    case 'getFirestoreRankingStudentsGeekyPuntos':
      return {
        ...state,
        rankingStudentsGeekyPuntos: action.payload,
      };
    default:
      return state;
  }
};

export const getNewsCategory = (state) => state.socialGeek.news;
export const getRankingStudentsGeekyPuntos = (state) => state.socialGeek.rankingStudentsGeekyPuntos;
