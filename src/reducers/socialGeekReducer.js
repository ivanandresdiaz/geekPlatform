;

const initialState = {
  news: [],
  choosingWeekStudent: false,
  rankingStudentsGeekyPuntos: [],
  myNews: [],
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
    case 'getFirestoreMyNewsCategory': {
      return {
        ...state,
        myNews: action.payload,
      };
    }
    default:
      return state;
  }
};

export const getNewsCategory = (state) => state.socialGeek.news;
export const getMyNewsCategory = (state) => state.socialGeek.myNews;
export const getRankingStudentsGeekyPuntos = (state) => state.socialGeek.rankingStudentsGeekyPuntos;
