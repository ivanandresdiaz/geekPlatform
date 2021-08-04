// aqui van todas las acciones del Administrador
import { firebase, googleAuthProvider, db, functions } from '../firebase/firebaseConfig';

export const createNewCorte = (nuevaCorte) => (dispatch, getState) => {
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

export const listarAdmin = () => (dispatch) => {
  db.collection('admin').get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const dataDocument = doc.data();
        return { ...dataDocument, id: doc.id };
      });
      dispatch({ type: 'listarAdmin', payload: data });
    });
};

export const createClassroom = (salonName, corteId) => async (dispatch, getState) => {
  const currentAdmin = getState().auth.fullName;
  try {
    const referenciaDocumento = await db.collection('classrooms').add({
      salonId: '',
      salonName,
      students: [],
      corteId,
      agendaTutorials: [],
      groups: [],
      sprints: [],
      createdBy: currentAdmin,
      fecha: firebase.firestore.FieldValue.serverTimestamp(),
    });
    await db.collection('classrooms').doc(referenciaDocumento.id).update({ salonId: referenciaDocumento.id });
    alert('se ha creado con exito un nuevo salon');
  } catch (error) {
    alert(`algo salio mal, ${error.message}`);
  }

};
export const getFirestoreSalones = (corteId) => (dispatch, getState) => {
  console.log(corteId);
  db.collection('classrooms').where('corteId', '==', corteId).get()
    .then((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        const dataDocument = doc.data();
        data.push(dataDocument);
      });
      dispatch({ type: 'getFirestoreSalones', payload: data });
    });
};

