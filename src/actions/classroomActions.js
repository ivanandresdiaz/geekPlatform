/* eslint-disable radix */
/* eslint-disable import/prefer-default-export */
import toast, { Toaster } from 'react-hot-toast';
import React from 'react';
import { firebase, googleAuthProvider, db, functions } from '../firebase/firebaseConfig';

export const getFirestoreSalon = (corteId, salonId) => (dispatch, getState) => {
  db.collection(`cortes/${corteId}/classrooms`).doc(salonId).get()
    .then((doc) => {
      dispatch({ type: 'getFirestoreSalon', payload: doc.data() });
    })
    .catch((err) => console.log(err));
};

export const createNewSprint = (corteId, salonId, title, description, start, end, deliveryLink, supportLink1, supportLink2, supportLink3, supportLink4, html, css, webpack, reactJs, reactHooks, redux, firebase, testing) => async (dispatch, getState) => {
  try {
    const resourcePDF = getState().salon.loadedSprintPDF;
    if (Date.parse(start) > Date.parse(end)) {
      alert('la fecha de entrega no puede ser menor a la fechan inicial');
    } else {
      const createSprint = functions.httpsCallable('createSprint');
      const data = { corteId,
        salonId,
        title,
        resourcePDF,
        description,
        start,
        end,
        deliveryLink,
        supportLink1,
        supportLink2,
        supportLink3,
        supportLink4,
        html,
        css,
        webpack,
        reactJs,
        reactHooks,
        redux,
        firebase,
        testing };
      await createSprint(data);
      alert('sprint agregado');
      dispatch({ type: 'newSprintCreated', payload: { ...data, id: title } });
    }

  } catch (error) {
    alert('algo salio mal');
    console.log(error);
  }

};

export const assignedFirestoreSprint = ({ corteId, salonId, title, description, start, end, deliveryLink, supportLink1, supportLink2, supportLink3, supportLink4, html, css, webpack, reactJs, reactHooks, redux, firebase, testing }) => async (dispatch, getState) => {
  try {
    const resourcePDF = getState().salon.loadedSprintPDF;
    if (Date.parse(start) > Date.parse(end)) {
      alert('la fecha de entrega no puede ser menor a la fechan inicial');
    } else {
      const createSprint = functions.httpsCallable('createSprint');
      const data = { corteId,
        salonId,
        title,
        resourcePDF,
        description,
        start,
        end,
        deliveryLink,
        supportLink1,
        supportLink2,
        supportLink3,
        supportLink4,
        html,
        css,
        webpack,
        reactJs,
        reactHooks,
        redux,
        firebase,
        testing };
      await createSprint(data);
      alert('sprint agregado');
      dispatch({ type: 'newSprintCreated', payload: { ...data, id: title } });
    }

  } catch (error) {
    alert('algo salio mal');
    console.log(error);
  }

};
export const getFirestoreSprints = (corteId, salonId) => async (dispatch, getState) => {
  db.collection(`/cortes/${corteId}/sprints`).where('salonId', '==', salonId).get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const dataDocument = doc.data();
        return { ...dataDocument, id: doc.id };
      });
      dispatch({ type: 'getFirestoreSprints', payload: data });
    })
    .catch((err) => console.log(err));
};

export const deleteSprint = (id, corteId) => async (dispatch) => {
  try {
    await db.collection(`/cortes/${corteId}/sprints`).doc(id).delete();
    alert('sprint eliminado');
    dispatch({ type: 'deleteSprint', payload: id });
  } catch (error) {
    alert('ha habido un error');
    console.log(error);
  }

};

export const getFirestoreAllSprints = (corteId) => async (dispatch, getState) => {
  db.collection('cortes').doc(corteId).collection('sprints').get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const dataDocument = doc.data();
        return { ...dataDocument, id: doc.id };
      });
      dispatch({ type: 'getFirestoreAllSprints', payload: data });
    })
    .catch((err) => console.log(err));
};

// Crear grupos

export const createWorkGroups = (corteId, salonId, title, newGroup) => async (dispatch, getState) => {
  try {
    const initialData = {
      ...newGroup,
      title,
      salonId,
    };
    await db.collection('cortes').doc(corteId).collection('groups').add(initialData);
    alert('se ha creado los nuevos grupos');
    const plantillaCreatingGroups = {
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
    };
    dispatch({ type: 'generateTemplateGroups', payload: plantillaCreatingGroups });
  } catch (error) {
    alert('ha habido un error');
    console.log(error);
  }
};
export const generateTemplateGroups = (title, cantidad) => async (dispatch, getState) => {
  try {
    const students = getState().students.studentsCorte;
    console.log('students', students);
    const studentsDataTransform = students.map((student) => (
      { id: student.uid, content: student.fullName }
    ));
    let tasks = {};
    let taskIds = [];
    studentsDataTransform.forEach((element) => {
      tasks = {
        ...tasks,
        [element.id]: element,
      };
      taskIds = [...taskIds, element.id];
    });
    const groupsNumber = parseInt(cantidad) + 1;
    let columns = {
      'column0': {
        id: 'column0',
        title: 'Estudiantes',
        taskIds,
      },
    };
    let columnOrder = ['column0'];
    for (let index = 1; index < groupsNumber; index++) {
      columns = {
        ...columns,
        [`column${index}`]: {
          id: `column${index}`,
          title: `Grupo ${index}`,
          taskIds: [],
        },
      };
      columnOrder = [...columnOrder, `column${index}`];
    }

    const initialData = {
      id: 'readyToSend',
      title,
      tasks,
      columns,
      columnOrder,
    };
    dispatch({ type: 'generateTemplateGroups', payload: initialData });
  } catch (error) {
    alert('ha habido un error');
    console.log(error);
  }
};

export const getFirestoreWorkGroups = (corteId, salonId) => async (dispatch, getState) => {
  db.collection(`/cortes/${corteId}/groups`).where('salonId', '==', salonId)
    .get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const dataDocument = doc.data();
        return { ...dataDocument, id: doc.id };
      });
      dispatch({ type: 'getFirestoreWorkGroups', payload: data });
    })
    .catch((err) => console.log(err));
};

export const deleteFirestoreGroups = (corteId, salonId, id) => async (dispatch) => {
  await db.collection(`/cortes/${corteId}/classrooms/${salonId}/groups`).doc(id).delete();
  alert('se ha eliminado el grupo');
  dispatch({ type: 'deleteFirestoreGroups', payload: id });
};

export const uploadSprintPDF = (file) => async (dispatch, getState) => {
  console.log(file.name);
  const refStorage = firebase.storage().ref(`sprintDocs/${file.name}`);
  const task = refStorage.put(file);

  task.on(
    'state_changed',
    (snapshot) => {
      const porcentaje = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`porcentaje de carga ${porcentaje}`);
      // $('.determinate').attr('style', `width: ${porcentaje}%`);
    },
    (err) => {
      console.log(`Error subiendo archivo = > ${err.message}`);
    },
    () => {
      task.snapshot.ref
        .getDownloadURL()
        .then((url) => {
          dispatch({ type: 'uploadSprintPDF', payload: url });
          // sessionStorage.setItem('imgNewPost', url);
        })
        .catch((err) => {
          console.log(`Error obteniendo downloadURL = > ${err}`);
        });
    },
  );
};
export const enviarFirestoreLista = (corteId, listaEnviar) => (dispatch, getState) => {
  const batch = db.batch();
  listaEnviar.forEach((student) => {
    batch.update(db.collection('students').doc(student.uid), { assistance: student.assistance, geekyPuntos: student.geekyPuntos + 1 });
  });
  batch
    .commit()
    .then(() => {
      toast.success('Se ha tomado lista');
      dispatch({ type: 'requestWeekStudent' });
    })
    .catch((error) => console.error(error));
};

