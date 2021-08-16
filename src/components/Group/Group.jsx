/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import toast from 'react-hot-toast';
import InnerList from './InnerList';
import { createWorkGroups, deleteFirestoreGroups } from '../../actions/classroomActions';
import { Button4, Button5 } from '../../globalStyles';

const Container = styled.div`
  display: flex;
`;

const Group = (props) => {
  const dispatch = useDispatch();
  const { columnOrder, columns, tasks, title, id, corteId, salonId } = props;
  const initialData = {
    tasks,
    columns,
    columnOrder,
  };
  const [state, setState] = useState(initialData);
  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === 'column') {
      const newColumnOrder = Array.from(state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...state,
        columnOrder: newColumnOrder,
      };
      setState(newState);
      return;
    }
    const home = state.columns[source.droppableId];
    const foreign = state.columns[destination.droppableId];

    if (home === foreign) {
      const newTaskIds = Array.from(home.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      const newHome = {
        ...home,
        taskIds: newTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newHome.id]: newHome,
        },
      };

      setState(newState);
      return;
    }

    // moving from one list to another
    const homeTaskIds = Array.from(home.taskIds);
    homeTaskIds.splice(source.index, 1);
    const newHome = {
      ...home,
      taskIds: homeTaskIds,
    };

    const foreignTaskIds = Array.from(foreign.taskIds);
    foreignTaskIds.splice(destination.index, 0, draggableId);
    const newForeign = {
      ...foreign,
      taskIds: foreignTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newHome.id]: newHome,
        [newForeign.id]: newForeign,
      },
    };
    setState(newState);
  };
  const handleSubmitNewGroups = () => {
    if (state.columns.column0.taskIds.length > 0) {
      return toast.error('La columna estudiantes contiene estudiantes sin grupo.');
    }
    const numberColumns = Object.entries(state.columns);
    const filtro = numberColumns.filter((column) => column[0] !== 'column0');
    const columnsReady = Object.fromEntries(filtro);
    const emptyColumns = numberColumns.map((column) => {
      if (column[1].taskIds.length === 0) {
        if (column[1].title !== 'Estudiantes') {
          toast.error(`el ${column[1].title} no puede quedar vacio`);
          return 'error';
        }
      }
    });
    if (emptyColumns.includes('error')) {
      return;
    } if (!(emptyColumns.includes('error'))) {
      const columnOrderReady = state.columnOrder.filter((column) => column !== 'column0');
      const newGroup = {
        ...state,
        columns: columnsReady,
        columnOrder: columnOrderReady,
      };
      dispatch(createWorkGroups(corteId, salonId, title, newGroup));
    }
  };
  const handleDeleteGroups = () => {
    dispatch(deleteFirestoreGroups(corteId, salonId, id));
  };
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        Tema:
        {' '}
        {title}
      </h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId='all-columns'
          direction='horizontal'
          type='column'
        >
          {(provided) => (
            <Container
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {state.columnOrder.map((columnId, index) => {
                const column = state.columns[columnId];
                return (
                  <InnerList
                    key={column.id}
                    column={column}
                    taskMap={state.tasks}
                    index={index}
                  />
                );
              })}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
      {id === 'readyToSend' ? (
        <div style={{ textAlign: 'center' }}>
          <Button4 primary type='button' onClick={handleSubmitNewGroups}>
            Crear y enviar grupos de trabajo
          </Button4>
        </div>

      ) : null}
      {id === 'defaultPlantillaGrupos' ? (
        <div style={{ textAlign: 'center' }}>
          <Button4 primary type='button'>
            No puedes enviar la plantilla por defecto
          </Button4>
        </div>

      ) : null}
      {id !== 'defaultPlantillaGrupos' && id !== 'readyToSend' ? (
        <div style={{ textAlign: 'center' }}>
          <Button4 primary type='button' onClick={handleDeleteGroups}>
            Eliminar grupos
          </Button4>
        </div>

      ) : null}
    </div>

  );
};

export default Group;
