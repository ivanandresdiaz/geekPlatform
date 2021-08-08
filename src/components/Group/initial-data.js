const initialData = {
  tasks: {
    'task-111': { id: 'task-111', content: 'Estudiante 1' },
    'task-2': { id: 'task-2', content: 'Estudiante 2' },
    'task-3': { id: 'task-3', content: 'Estudiante 3' },
    'task-4': { id: 'task-4', content: 'Estudiante 4' },
  },
  columns: {
    'column-0': {
      id: 'column-1',
      title: 'Grupo 1',
      taskIds: ['task-111', 'task-2', 'task-3', 'task-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In progress',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Grupo 1',
      taskIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-0', 'column-2', 'column-3'],
};

const numberColumns = Object.entries(initialData.columns);
const filtro = numberColumns.filter((column) => column[0] !== 'column-0');
const newGroup = Object.fromEntries(filtro);
console.log(filtro);

export default initialData;
