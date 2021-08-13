// aqui van todas las acciones del Administrador
import { firebase, googleAuthProvider, db, functions } from '../firebase/firebaseConfig';

export const createNewCorte = (nuevaCorte, description) => async (dispatch, getState) => {
  try {
    const currentUser = getState().auth.fullName;
    const createNewCorte = functions.httpsCallable('createCorte');
    await createNewCorte({ nuevaCorte, currentUser, description });
    alert('nueva corte creada');
  } catch (error) {
    alert(error.message);
  }
};

export const getFirestoreCortes = () => (dispatch, getState) => {
  db.collection('cortes').onSnapshot((querySnapshot) => {
    const cortes = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      return cortes.push({ ...data, id: doc.id });
    });
    dispatch({ type: 'getCortes', payload: cortes });
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
  db.collection(`cortes/${corteId}/classrooms`).get()
    .then((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        const dataDocument = doc.data();
        data.push(dataDocument);
      });
      dispatch({ type: 'getFirestoreSalones', payload: data });
    });
};

