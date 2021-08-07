/* eslint-disable import/prefer-default-export */
import { firebase, googleAuthProvider, db, functions } from '../firebase/firebaseConfig';

export const getFirestoreSalon = (corteId, salonId) => (dispatch, getState) => {
  db.collection(`cortes/${corteId}/classrooms`).doc(salonId).get()
    .then((doc) => {
      dispatch({ type: 'getFirestoreSalon', payload: doc.data() });
    })
    .catch((err) => console.log(err));
};

export const createNewSprint = (corteId, salonId, title,
  description,
  startDate,
  deadline,
  deliveryLink,
  supportLink1,
  supportLink2,
  supportLink3,
  supportLink4) => async (dispatch, getState) => {
  try {
    const createSprint = functions.httpsCallable('createSprint');
    await createSprint({ corteId,
      salonId,
      title,
      description,
      startDate,
      deadline,
      deliveryLink,
      supportLink1,
      supportLink2,
      supportLink3,
      supportLink4 });
    alert('sprint agregado');
  } catch (error) {
    alert('algo salio mal');
    console.log(error);
  }

};
  // db.collection('cortes').doc(corteId).collection('classrooms').doc(salonId)
  //   .collection('sprints')
export const getFirestoreSprints = (corteId, salonId) => async (dispatch, getState) => {
  db.collection('/cortes/Frontend4/classrooms/sigloxxl/sprints')
    .get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const dataDocument = doc.data();
        return { ...dataDocument, id: doc.id };
      });
      dispatch({ type: 'getFirestoreSprints', payload: data });
    })
    .catch((err) => console.log(err));
};
