/* eslint-disable import/prefer-default-export */
import { firebase, db } from '../firebase/firebaseConfig';

export const listarTeachers = () => async (dispatch) => {
  db.collection('teachers').get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const dataDocument = doc.data();
        return { ...dataDocument, id: doc.id };
      });
      dispatch({ type: 'listarTeachers', payload: data });
    });
  // await db.collection('teachers').onSnapshot((querySnapshot) => {
  //   const favoritos = [];
  //   querySnapshot.forEach((doc) => {
  //     const data = doc.data();
  //     return favoritos.push({ ...data });
  //   });
  //   dispatch({ type: 'listarTeachers', payload: favoritos });
  // });
};
