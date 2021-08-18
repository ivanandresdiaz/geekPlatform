/* eslint-disable import/prefer-default-export */
import toast from 'react-hot-toast';
import {
  firebase,
  googleAuthProvider,
  db,
  functions,
} from '../firebase/firebaseConfig';

export const getFirestoreNewsCategory =
  (corteId, categoryNews) => (dispatch, getState) => {
    db.collection('cortes')
      .doc(corteId)
      .collection('news')
      .where('categoryNews', '==', categoryNews)
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
        toast.error('Algo salio mal');
      });
  };
export const getFirestoreMyNewsCategory = (corteId, categoryNews, uidProfile) => (dispatch, getState) => {
  db.collection('cortes')
    .doc(corteId)
    .collection('news')
    .where('categoryNews', '==', categoryNews)
    .where('uid', '==', uidProfile)
    .get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const dataDocument = doc.data();
        return { ...dataDocument, id: doc.id };
      });
      console.log(data);
      dispatch({ type: 'getFirestoreMyNewsCategory', payload: data });
    })
    .catch((err) => {
      console.log(err);
      toast.error('Algo salio mal');
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
    await db
      .collection('cortes')
      .doc(corteId)
      .collection('news')
      .add(nuevoRecurso);
    toast.success('Se ha agregado con exito');
  } catch (error) {
    console.log(error.message);
    toast.error('No se puede agregar, intente de nuevo.');
  }
};

export const addLikeResourceFirestore =
  (corteId, id) => (dispatch, getState) => {
    const addLike = functions.httpsCallable('addLike');
    addLike({ corteId, id });
  };
export const removeLikeResourceFirestore =
  (corteId, id) => (dispatch, getState) => {
    const subtractLike = functions.httpsCallable('subtractLike');
    subtractLike({ corteId, id });
  };

export const addFirestorePersonalProject =
  (values) => async (dispatch, getState) => {
    console.log('entro a addFirestorePersonalProject');
    try {
      const { uid, myProjects } = getState().auth;
      const newProjects = [...myProjects, values];

      await db
        .collection('students')
        .doc(uid)
        .update({ myProjects: newProjects });

      toast.success('Se ha agregado un nuevo proyecto');
      dispatch({ type: 'addFirestorePersonalProject', payload: newProjects });
    } catch (error) {
      toast.error('Algo sucedió');
      console.log(error.message);
    }
  };
