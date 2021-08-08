
const initialState = {
  salonData: [],
  sprints: [],
};

export const salonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'getFirestoreSalon':
      return {
        ...state,
        salonData: action.payload,
      };
    case 'getFirestoreSprints':
      return {
        ...state,
        sprints: action.payload,
      };
    case 'newSprintCreated':
      return {
        ...state,
        sprints: [...state.sprints, action.payload],
      };
    default:
      return state;
  }
};

export const getSalonData = (state) => state.salon.salonData;
export const getSprints = (state) => state.salon.sprints;
