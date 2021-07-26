import { db, firebase } from '../firebase/firebaseConfig';
import { types } from '../types';

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

export const addRecursoAction = (category, description, url) => async (dispatch, getState) => {
  try {
    const nuevoRecurso = {
      category,
      description,
      url,
      score: 4,
      recommendedBy,
      fecha: firebase.firestore.FieldValue.serverTimestamp(),
    };
    const recommendedBy = getState().logged.name;
    const agregado = await db.collection('bancoRecursosAcademicos').add(nuevoRecurso);
    if (agregado) {
      alert('se ha agregado con exito');
      dispatch({ type: types.addRecursoAcademico, payload: nuevoRecurso });
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
