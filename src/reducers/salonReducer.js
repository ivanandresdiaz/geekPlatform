
const initialState = {
  salonData: [],
  sprints: [],
  allSprints: [],
  workGroups: [],
  loadedSprintPDF: '',
  plantillaCreatingGroups: {
    title: 'Default plantilla grupos',
    id: 'defaultPlantillaGrupos',
    tasks: {
      'task111': { id: 'task111', content: 'Estudiante 1' },
      'task2': { id: 'task2', content: 'Estudiante 2' },
      'task3': { id: 'task3', content: 'Estudiante 3' },
      'task4': { id: 'task4', content: 'Estudiante 4' },
    },
    columns: {
      'column1': {
        id: 'column1',
        title: 'Estudiantes',
        taskIds: ['task111', 'task2', 'task3', 'task4'],
      },
      'column2': {
        id: 'column2',
        title: 'Grupo 1',
        taskIds: [],
      },
      'column3': {
        id: 'column3',
        title: 'Grupo 2',
        taskIds: [],
      },
    },
    // Facilitate reordering of the columns
    columnOrder: ['column1', 'column2', 'column3'],
  },
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

    case 'getFirestoreAllSprints':
      return {
        ...state,
        allSprints: action.payload,
      };
    case 'newSprintCreated':
      return {
        ...state,
        sprints: [...state.sprints, action.payload],
        allSprints: [...state.allSprints, action.payload],
      };

    case 'uploadSprintPDF':
      return {
        ...state,
        loadedSprintPDF: action.payload,
      };
    case 'deleteSprint': {
      const updatedSprints = state.sprints.filter((sprint) => sprint.id !== action.payload);
      const updatedAllSprints = state.allSprints.filter((sprint) => sprint.id !== action.payload);
      return {
        ...state,
        sprints: [...updatedSprints],
        allSprints: [...updatedAllSprints],
      };
    }

    case 'getFirestoreWorkGroups':
      return {
        ...state,
        workGroups: action.payload,
      };

    case 'deleteFirestoreGroups': {
      const newWorkGroups = state.workGroups.filter((workGroup) => workGroup.id !== action.payload);
      return {
        ...state,
        workGroups: newWorkGroups,
      }; }
    case 'generateTemplateGroups':
      return {
        ...state,
        plantillaCreatingGroups: action.payload,
      };

    default:
      return state;
  }
};

export const getSalonData = (state) => state.salon.salonData;
export const getSprints = (state) => state.salon.sprints;
export const getAllSprints = (state) => state.salon.allSprints;
export const getWorkGroups = (state) => state.salon.workGroups;
export const getPlantillaCreatingGroups = (state) => state.salon.plantillaCreatingGroups;
export const getLoadedSprintPDF = (state) => state.salon.loadedSprintPDF;
