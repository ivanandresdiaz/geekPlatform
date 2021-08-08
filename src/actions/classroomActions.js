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
    const data = { corteId,
      salonId,
      title,
      description,
      startDate,
      deadline,
      deliveryLink,
      supportLink1,
      supportLink2,
      supportLink3,
      supportLink4 };
    await createSprint(data);
    alert('sprint agregado');
    dispatch({ type: 'newSprintCreated', payload: { ...data, id: title } });
  } catch (error) {
    alert('algo salio mal');
    console.log(error);
  }

};
  // db.collection('cortes').doc(corteId).collection('classrooms').doc(salonId)
  //   .collection('sprints')
export const getFirestoreSprints = (corteId, salonId) => async (dispatch, getState) => {
  console.log('corteId', corteId);
  console.log('salonId', salonId);
  db.collection(`/cortes/${corteId}/classrooms/${salonId}/sprints`)
    .get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const dataDocument = doc.data();
        return { ...dataDocument, id: doc.id };
      });
      console.log('data', data);
      dispatch({ type: 'getFirestoreSprints', payload: data });
    })
    .catch((err) => console.log(err));
};
