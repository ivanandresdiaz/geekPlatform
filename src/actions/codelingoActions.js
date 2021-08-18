/* eslint-disable radix */
/* eslint-disable import/prefer-default-export */
import toast from 'react-hot-toast';
import { db, firebase } from '../firebase/firebaseConfig';

export const addFirestoreNewCodelingoChallenge = (values, fullName) => (dispatch, getState) => {
  const geekyPuntos = Math.round(parseInt(values.geekyPuntos));
  const nuevoRecurso = {
    ...values,
    geekyPuntos,
    createdBy: fullName,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  };
  console.log(nuevoRecurso);
  db.collection('bancos').doc('codelingo').collection('resources').add(nuevoRecurso)
    .then(() => {
      toast.success('Se ha agregado reto con éxito.');
      dispatch({ type: 'addFirestoreNewCodelingoChallenge', payload: { ...nuevoRecurso, id: values.title } });
    })
    .catch((error) => {
      console.log(error.message);
      // toast.error('No se puedo agregar, intente de nuevo.');
    });

};
export const deleteFirestoreCodelingoChallenge = (id) => async (dispatch, getState) => {
  await db
    .collection('bancos')
    .doc('codelingo')
    .collection('resources')
    .doc(id)
    .delete();
  toast.success('Se ha eliminado con exito el reto.');
  dispatch({ type: 'deleteFirestoreCodelingoChallenge', payload: id });
};

export const getFirestoreAllCodelingoChallenges = (corteId) => (dispatch, getState) => {
  db.collection('bancos').doc('codelingo').collection('resources')
    .get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const dataDocument = doc.data();
        return { ...dataDocument, id: doc.id };
      });
      dispatch({ type: 'getFirestoreAllCodelingoChallenges', payload: data });
    })
    .catch((err) => console.log(err));
};

export const getCategoriesCodelingoChallenges = () => async (dispatch) => {
  await db.collection('bancos').doc('codelingo').get()
    .then((doc) => {
      const data = { ...doc.data(), id: doc.id };
      dispatch({ type: 'getCategoriesCodelingoChallenges', payload: data });
    });
};
export const getCategoryCodelingo = (category) => async (dispatch, getState) => {
  db.collection('bancos')
    .doc('codelingo')
    .collection('resources')
    .where(`${category}`, '==', true)
    .get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const dataDocument = doc.data();
        return { ...dataDocument, id: doc.id };
      });
      dispatch({ type: 'getCategoryCodelingo', payload: data });
    })
    .catch((err) => {
      console.log(err);
      alert(`algo salio mal al obtener la etiqueta ${category}`);
    });
};
export const enviarChallengeCodelingoDone = (uid, fullName, photoURL, id, linkDespliegue, linkGithub) => async (dispatch, getState) => {
  const userDataLogged = getState().auth;

  try {
    const newCodelingoChallengesToScore = [...userDataLogged.codelingoChallengesToScore, id];
    await db.collection('bancos').doc('codelingo').collection('challengesDone').add({ uid, fullName, photoURL, challengeId: id, linkDespliegue, linkGithub, calificado: false });
    await db.collection('students').doc(uid).update({ codelingoChallengesToScore: newCodelingoChallengesToScore });
    dispatch({ type: 'enviarChallengeCodelingoDone', payload: newCodelingoChallengesToScore });
    toast.success('Se ha enviado tu reto con exito.');
  } catch (error) {
    alert('algo salio mal al subir tu reto');
    console.log(error);
  }

};
export const getCodelingoChallengesToScore = () => (dispatch) => {
  db.collection('bancos').doc('codelingo').collection('challengesDone').where('calificado', '==', false)
    .get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const dataDocument = doc.data();
        return { ...dataDocument, id: doc.id };
      });
      dispatch({ type: 'getCodelingoChallengesToScore', payload: data });
    })
    .catch((err) => console.log(err));
};
export const aprobadoRetoCodelingo = (calificaciones, uid, id, geekyPuntos, comentarios, dataChallengeToScoreId) => (dispatch) => {
  console.log('id', id);
  //enviar los geekyPuntos, enviar los promedios a uid, y agregar a hechos en uid, enviar notificaiones
  // AGREGAR NOTAS A PROMEDIOS
  const calificacionesArray = Object.entries(calificaciones);
  const calificacionesNumber = calificacionesArray.map((item) => {
    const tecnologiaEvaluada = item[0];
    const calificacionToNumber = parseInt(item[1]);
    return {
      [tecnologiaEvaluada]: calificacionToNumber,
    };
  });
  db.collection('students').doc(uid).get()
    .then((doc) => {
      const dataDocument = doc.data();

      const dataDocumentArray = Object.entries(dataDocument);
      const batch = db.batch();
      calificacionesNumber.forEach((calificacion) => {
        const getAtributoEspecifico = dataDocumentArray.filter((item) => {
          const calificacionArray = Object.entries(calificacion);
          return (item[0] === calificacionArray[0][0]);
        });
        if (getAtributoEspecifico.length > 0) {
          const calificacionArray = Object.entries(calificacion);
          const calificacionParaAñadir = calificacionArray[0].slice(1);
          const grupoCalificaciones = getAtributoEspecifico[0].slice(1);
          const nuevasCalificaciones = [...calificacionParaAñadir, ...grupoCalificaciones[0]];
          batch.update(db.collection('students').doc(uid), { [getAtributoEspecifico[0][0]]: nuevasCalificaciones });
        }

      });
      batch
        .commit()
        // FIN DE AGREGAR NOTAS A PROMEDIOS
        .then(() => {
          toast.success('se ha agregado las notas al promedio del estudiante');
          dispatch({ type: 'requestWeekStudent' });
        }).then(() => {
          //agregar geekypuntos
          db.collection('students').doc(uid).update({ geekyPuntos: dataDocument.geekyPuntos + geekyPuntos });

          toast.success(`se han sumado ${geekyPuntos} geekyPuntos a ${dataDocument.fullName}`);
          db.collection('students').doc(uid).update({ codelingoChallengesDone: [...dataDocument.codelingoChallengesDone, id] });
          const updatePendingToScore = dataDocument.codelingoChallengesToScore.filter((item) => item !== id);
          db.collection('students').doc(uid).update({ codelingoChallengesToScore: updatePendingToScore });
          //agregar geekypuntos
          db.collection('bancos').doc('codelingo').collection('challengesDone').doc(dataChallengeToScoreId)
            .update({ calificado: true });
        })
        .catch((error) => console.error(error));

      //agregar geekypuntos

    })
    .catch((err) => console.log(err));

};
