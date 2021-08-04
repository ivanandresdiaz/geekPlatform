/* eslint-disable import/prefer-default-export */
// aqui se manejan los datos de los estudiantes
import { firebase, googleAuthProvider, db, functions } from '../firebase/firebaseConfig';

export const getFirestoreStudentsCorte = (corteId) => (dispatch, getState) => {
  console.log(corteId);
  db.collection('students').where('corteId', '==', corteId).get()
    .then((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        const dataDocument = doc.data();
        data.push(dataDocument);
      });
      dispatch({ type: 'getFirestoreStudentsCorte', payload: data });
    });
};
