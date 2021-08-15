/* eslint-disable import/prefer-default-export */
import toast, { Toaster } from 'react-hot-toast';
import React from 'react';
import {
  firebase,
  googleAuthProvider,
  db,
  functions,
} from '../firebase/firebaseConfig';

export const requestWeekStudent = (corteId) => (dispatch, getState) => {
  const { studentsCorte } = getState().students;
  const batch = db.batch();
  studentsCorte.forEach((student) => {
    batch.update(db.collection('students').doc(student.uid), { voted: true });
  });
  batch
    .commit()
    .then(() => {
      toast.success('Se ha activado la votación del estudiante de la semana');
      dispatch({ type: 'requestWeekStudent' });
    })
    .catch((error) => console.error(error));
};
export const cancelRequestWeekStudent = (corteId) => (dispatch, getState) => {
  const { studentsCorte } = getState().students;
  const batch = db.batch();
  studentsCorte.forEach((student) => {
    batch.update(db.collection('students').doc(student.uid), { voted: false });
  });
  batch
    .commit()
    .then(() => {
      toast.error('Se ha desactivado la votación del estudiante de la semana');
      dispatch({ type: 'cancelRequestWeekStudent' });
    })
    .catch((error) => console.error(error));
};

export const choseWeekStudent =
  (uid, fullName) => async (dispatch, getState) => {
    const loggedUser = getState().auth.uid;
    if (uid === loggedUser) {
      alert('no puedes seleccionarte a ti mismo');
    } else {
      const addGeekyPunto = functions.httpsCallable('addGeekyPunto');
      addGeekyPunto({ uid }).then((result) => {
        alert(`has votado por ${fullName}`);
      });
    }
  };

export const getFirestoreRankingStudentsGeekyPuntos =
  (corteId) => (dispatch, getState) => {
    db.collection('students')
      .where('corteId', '==', corteId)
      .orderBy('geekyPuntos', 'desc')
      .limit(5)
      .get()
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          const dataDocument = doc.data();
          data.push(dataDocument);
        });
        dispatch({
          type: 'getFirestoreRankingStudentsGeekyPuntos',
          payload: data,
        });
      });
  };
