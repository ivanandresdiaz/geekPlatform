//aqui se manejan todos los actions que tenga que ver con el banco de recursos
import { db, firebase } from '../firebase/firebaseConfig';
import { types } from '../types';

export const getFirestoreCategoryData = (category) => (dispatch) => {
  db.collection('bancos').doc('recursosAcademicos').collection('resources').where('category', '==', category)
    .get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const dataDocument = doc.data();
        return { ...dataDocument, id: doc.id };
      });
      dispatch({ type: 'getFirestoreCategoryData', payload: data });
    })
    .then(() => {
      db.collection('bancos').doc('recursosAcademicos').get()
        .then((doc) => {
          const data = { ...doc.data(), id: doc.id };
          dispatch({ type: 'getCategoriesFirestore', payload: data });
        });
    })
    .catch((err) => {
      console.log(err);
      alert('algo salio mal');
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

export const addFirestoreNewAcademicResource = (values, subCategories) => async (dispatch, getState) => {
  const photoURL = getState().bancoRecursos.loadedURLImage;
  try {
    const nuevoRecurso = {
      ...values,
      photoURL,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    };
    const agregado = await db.collection('bancos').doc('recursosAcademicos').collection('resources').add(nuevoRecurso);
    if (agregado) {
      const existSubCategory = subCategories.filter((item) => item === values.subCategory);
      if (!(existSubCategory.length > 0)) {
        const newSubCategories = [
          ...subCategories, values.subCategory,
        ];
        await db.collection('bancos').doc('recursosAcademicos').update({
          subCategories: newSubCategories,
        });
      }
      alert('se ha agregado con exito');
    }
  } catch (error) {
    console.log(error.message);
    alert('no se puedo agregar, intente de nuevo.');
  };
};

export const uploadImgResource = (file) => async (dispatch, getState) => {
  console.log(file.name);
  const refStorage = firebase.storage().ref(`recursosAcademicos/${file.name}`);
  const task = refStorage.put(file);

  task.on(
    'state_changed',
    (snapshot) => {
      const porcentaje = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`porcentaje de carga ${porcentaje}`);
      // $('.determinate').attr('style', `width: ${porcentaje}%`);
    },
    (err) => {
      console.log(`Error subiendo archivo = > ${err.message}`);
    },
    () => {
      task.snapshot.ref
        .getDownloadURL()
        .then((url) => {
          console.log('url', url);
          dispatch({ type: 'uploadImgResource', payload: url });
          // sessionStorage.setItem('imgNewPost', url);
        })
        .catch((err) => {
          console.log(`Error obteniendo downloadURL = > ${err}`);
        });
    },
  );
};
export const deleteRecursoFirestore = (id) => async (dispatch) => {
  await db.collection('bancos').doc('recursosAcademicos').collection('resources').doc(id)
    .delete();
  dispatch({ type: 'deleteRecursoFirestore', payload: id });
};

export const updateFavorite = (id, nombre) => async (dispatch) => {
  await db.collection('bancoRecursosAcademicos').doc(id).update({
    nombre,
  });
  dispatch(consultarFavoritos());
};

export const scoreResourceFirestore = (id, newScore, lastScore) => async (dispatch) => {
  const updatedScore = [...lastScore, newScore];
  await db.collection('bancos').doc('recursosAcademicos').collection('resources').doc(id)
    .update({ score: updatedScore });
};
