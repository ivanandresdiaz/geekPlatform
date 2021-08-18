/* eslint-disable import/prefer-default-export */
import toast from 'react-hot-toast';
import { db, firebase } from '../firebase/firebaseConfig';

export const addFirestoreNewCodelingoChallenge = (values) => async (dispatch, getState) => {
  const createdBy = getState().auth.fullName;
  try {
    const nuevoRecurso = {
      ...values,
      geekyPuntos: Math.round(values.geekyPuntos),
      createdBy,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    };
    await db.collection('bancos').doc('codelingo').collection('resources').add(nuevoRecurso);
    toast.success('Se ha agregado reto con éxito.');
    dispatch({ type: 'addFirestoreNewCodelingoChallenge', payload: { ...nuevoRecurso, id: values.title } });
  } catch (error) {
    console.log(error.message);
    toast.error('No se puedo agregar, intente de nuevo.');
  }
};
export const deleteFirestoreCodelingoChallenge = (id) => async (dispatch, getState) => {
  await db
    .collection('bancos')
    .doc('codelingo')
    .collection('resources')
    .doc(id)
    .delete();
  toast.success('Se ha eliminado con exito el reto.');
  dispatch({ type: 'deleteFirestoreCodelingoChallenge', payload: id });
};

export const getFirestoreAllCodelingoChallenges = (corteId) => (dispatch, getState) => {
  db.collection('bancos').doc('codelingo').collection('resources')
    .get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const dataDocument = doc.data();
        return { ...dataDocument, id: doc.id };
      });
      dispatch({ type: 'getFirestoreAllCodelingoChallenges', payload: data });
    })
    .catch((err) => console.log(err));
};

export const getCategoriesCodelingoChallenges = () => async (dispatch) => {
  await db.collection('bancos').doc('codelingo').get()
    .then((doc) => {
      const data = { ...doc.data(), id: doc.id };
      dispatch({ type: 'getCategoriesCodelingoChallenges', payload: data });
    });
};
export const getCategoryCodelingo = (category) => async (dispatch, getState) => {
  db.collection('bancos')
    .doc('codelingo')
    .collection('resources')
    .where(`${category}`, '==', true)
    .get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const dataDocument = doc.data();
        return { ...dataDocument, id: doc.id };
      });
      dispatch({ type: 'getCategoryCodelingo', payload: data });
    })
    .catch((err) => {
      console.log(err);
      alert(`algo salio mal al obtener la etiqueta ${category}`);
    });
};
export const enviarChallengeCodelingoDone = (uid, fullName, photoURL, id, linkDespliegue, linkGithub) => async (dispatch, getState) => {
  try {
    await db.collection('bancos').doc('codelingo').collection('challengesDone').add({ uid, fullName, photoURL, challengeId: id, linkDespliegue, linkGithub });
    toast.success('Se ha enviado tu reto con exito.');
  } catch (error) {
    alert('algo salio mal al subir tu reto');
    console.log(error);
  }

};
export const getCodelingoChallengesToScore = () => (dispatch) => {
  db.collection('bancos').doc('codelingo').collection('challengesDone')
    .get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const dataDocument = doc.data();
        return { ...dataDocument, id: doc.id };
      });
      dispatch({ type: 'getCodelingoChallengesToScore', payload: data });
    })
    .catch((err) => console.log(err));
};
