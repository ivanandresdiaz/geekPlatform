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
};

