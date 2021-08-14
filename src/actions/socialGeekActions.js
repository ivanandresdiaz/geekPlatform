/* eslint-disable import/prefer-default-export */
import { firebase, googleAuthProvider, db, functions } from '../firebase/firebaseConfig';

export const getFirestoreNewsCategory = (corteId, categoryNews) => (dispatch, getState) => {
  db.collection('cortes').doc(corteId).collection('news').where('categoryNews', '==', categoryNews)
    .get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const dataDocument = doc.data();
        return { ...dataDocument, id: doc.id };
      });
      dispatch({ type: 'getFirestoreNewsCategory', payload: data });
    })
    .catch((err) => {
      console.log(err);
      alert('algo salio mal');
    });
};

export const addFirestoreNewsSocialGeek = (corteId, values) => async (dispatch, getState) => {
  const { photoURL, fullName, uid } = getState().auth;
  try {
    const nuevoRecurso = {
      ...values,
      photoURL,
      fullName,
      uid,
      likes: [],
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    };
    await db.collection('cortes').doc(corteId).collection('news').add(nuevoRecurso);
    alert('se ha agregado con exito');
  } catch (error) {
    console.log(error.message);
    alert('no se puedo agregar, intente de nuevo.');
  };
};

export const addLikeResourceFirestore = (corteId, id) => (dispatch, getState) => {
  const addLike = functions.httpsCallable('addLike');
  addLike({ corteId, id });
};
export const removeLikeResourceFirestore = (corteId, id) => (dispatch, getState) => {
  const subtractLike = functions.httpsCallable('subtractLike');
  subtractLike({ corteId, id });
};
