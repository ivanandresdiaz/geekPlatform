// aqui van todas las acciones del Administrador
import { firebase, googleAuthProvider, db, functions } from '../firebase/firebaseConfig';

export const createNewCorte = (nuevaCorte) => (dispatch, getState) => {
  console.log('inicio de crear nueva corte');
  db.doc(`cortes/${nuevaCorte}`).get()
    .then((doc) => {
      if (doc.exists) {
        alert('Este nombre de corte ya existe, intente con otro nombre');
      } else {
        const currentUser = getState().auth.fullName;
        db.collection('cortes').doc(nuevaCorte).set({
          corteId: nuevaCorte,
          createBy: currentUser,
          students: [],
          assignedTeachers: [],
          active: true,
        });
        alert('nueva corte creada');
      }
    });
};

export const getFirestoreCortes = () => (dispatch, getState) => {
  db.collection('cortes').get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const dataDocument = doc.data();
        return { ...dataDocument };
      });
      dispatch({ type: 'getCortes', payload: data });
    });
};
