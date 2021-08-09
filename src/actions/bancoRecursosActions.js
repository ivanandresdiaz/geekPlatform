//aqui se manejan todos los actions que tenga que ver con el banco de recursos
import { db, firebase } from '../firebase/firebaseConfig';
import { types } from '../types';

export const getFirestoreSubcategories = () => (dispatch) => {
  const data = ['redux', 'firebase', 'React', 'Javascript'];
  // db.collection('bancoRecursosAcademicos').get()
  //   .then((snapshot) => {
  //     const data = snapshot.docs.map((doc) => {
  //       const dataDocument = doc.data();
  //       return { ...dataDocument, id: doc.id };
  //     });
  dispatch({ type: 'getFirestoreSubcategories', payload: data });
  // });
};

export const getActionBancoRecursos = () => (dispatch) => {
  db.collection('bancoRecursosAcademicos').get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const dataDocument = doc.data();
        return { ...dataDocument, id: doc.id };
      });
      dispatch({ type: types.loadBancoRecursos, payload: data });
    });
};

export const addFirestoreNewCategoryAcademicResource = (category, categories) => async (dispatch, getState) => {
  try {
    const newCategories = [
      ...categories, category,
    ];

    const agregado = await db.collection('bancos').doc('recursosAcademicos').update({
      categories: newCategories,
    });
    dispatch({ type: 'addFirestoreNewCategoryAcademicResource', payload: newCategories });
    if (agregado) {
      alert('se ha agregado nueva Categoria con exito');
    }
  } catch (error) {
    console.log(error.message);
    alert('no se puedo agregar a favoritos, intente de nuevo.');
  };
};

export const addFirestoreNewAcademicResource = (values) => async (dispatch, getState) => {
  try {
    const nuevoRecurso = {
      ...values,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    };
    const agregado = await db.collection('bancos').doc('recursosAcademicos').collection('resources').add(nuevoRecurso);
    if (agregado) {
      alert('se ha agregado con exito');
    }
  } catch (error) {
    console.log(error.message);
    alert('no se puedo agregar a favoritos, intente de nuevo.');
  };
};
export const deleteRecursoAction = (id) => async (dispatch) => {
  await db.collection('bancoRecursosAcademicos').doc(id).delete();
  dispatch({ type: types.deleteRecurso, payload: id });
};

export const updateFavorite = (id, nombre) => async (dispatch) => {
  await db.collection('bancoRecursosAcademicos').doc(id).update({
    nombre,
  });
  dispatch(consultarFavoritos());
};
