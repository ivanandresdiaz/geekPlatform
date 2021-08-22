/* eslint-disable import/prefer-default-export */
import toast from 'react-hot-toast';
import {
  firebase,
  db,
  functions,
} from '../firebase/firebaseConfig';

export const getFirestoreNewsCategory = (corteId, categoryNews) => (dispatch, getState) => {
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
export const getFirestoreNewsCategoryBlogs = (corteId) => (dispatch, getState) => {
  db.collection('cortes')
    .doc(corteId)
    .collection('blogs')
    .get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const dataDocument = doc.data();
        return { ...dataDocument, id: doc.id };
      });
      dispatch({ type: 'getFirestoreNewsCategoryBlog', payload: data });
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
export const addLikeResourceFirestoreBlog =
  (corteId, id, uid, fullName) => (dispatch, getState) => {
    const addLikeBlog = functions.httpsCallable('addLikeBlog');

    addLikeBlog({ corteId, id, uid });
    toast.success(`le has enviado 1 geekyPunto a ${fullName}`);
  };
export const removeLikeResourceFirestoreBlog =
  (corteId, id, uid, fullName) => (dispatch, getState) => {
    const subtractLikeBlog = functions.httpsCallable('subtractLikeBlog');
    subtractLikeBlog({ corteId, id, uid });
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
export const createFirestoreNewBlog = (title, description, sitioWeb, gitHub, video, image, textTop, textBottom, html, css, javascript, webpack, reactJs, reactHooks, redux, firebase, testing, corteId, uid) => async (dispatch, getState) => {
  const { photoURL, fullName, uid } = getState().auth;
  try {
    const data = {
      title,
      description,
      sitioWeb,
      gitHub,
      video,
      image,
      textTop,
      textBottom,
      html,
      css,
      javascript,
      webpack,
      reactJs,
      reactHooks,
      redux,
      firebase,
      testing,
      corteId,
      uid,
      fullName,
      photoURL,
      likes: [],
      categoryNews: 'blogs',
      slug: title.split(' ').join('-'),
      date: new Date().toLocaleDateString(),
    };
    await db
      .collection('cortes')
      .doc(corteId)
      .collection('blogs')
      .add(data);
    toast.success('Se ha agregado con exito');
    // dispatch({ type: 'createFirestoreNewBlog', payload: { ...data, id: title } });
  } catch (error) {
    toast.error('Algo sucedió');
    console.log(error.message);
  }

};
export const deleteFirestoreBlog = (corteId, idBlog) => async (dispatch) => {
  try {
    await db
      .collection('cortes')
      .doc(corteId)
      .collection('blogs')
      .doc(idBlog)
      .delete();
    dispatch({ type: 'deleteFirestoreBlog', payload: idBlog });
    toast.success('Se ha eliminado con exito');
  } catch (error) {
    toast.error('no se puedo eliminar el blog');
    console.log(error);
  }

};
export const deleteFirestoreNews = (corteId, idNews) => async (dispatch) => {
  try {
    await db
      .collection('cortes')
      .doc(corteId)
      .collection('blogs')
      .doc(idNews)
      .delete();
    dispatch({ type: 'deleteFirestoreBlog', payload: idNews });
    toast.success('Se ha eliminado con exito');
  } catch (error) {
    toast.error('no se puedo eliminar el blog');
    console.log(error);
  }

};
