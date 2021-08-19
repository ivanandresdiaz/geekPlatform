/* eslint-disable import/prefer-default-export */
// aqui van todo lo relacionado a autenticacion
import toast from 'react-hot-toast';
import { types } from '../types';
import {
  firebase,
  googleAuthProvider,
  db,
  functions,
} from '../firebase/firebaseConfig';

export const login = (uid, displayName, role) => async (dispatch, getState) => {
  switch (role) {
    case 'student':
      {
        db.collection('students')
          .doc(uid)
          .get()
          .then((doc) => {
            const data = { ...doc.data(), id: doc.id };
            dispatch({
              type: types.login,
              payload: { ...data, displayName, role },
            });
          })
          .catch((err) => {
            toast.error(`Algo salio mal en el login: ${err.message}`);
          });
      }
      break;
    case 'teacher':
      {
        db.collection('teachers')
          .doc(uid)
          .get()
          .then((doc) => {
            const data = { ...doc.data(), id: doc.id };
            dispatch({
              type: types.login,
              payload: { ...data, displayName, role },
            });
          })
          .catch((err) => {
            toast.error(`Algo salio mal en el login: ${err.message}`);
          });
      }
      break;
    case 'admin':
      {
        db.collection('admin')
          .doc(uid)
          .get()
          .then((doc) => {
            const data = { ...doc.data(), id: doc.id };
            dispatch({
              type: types.login,
              payload: { ...data, displayName, role },
            });
          })
          .catch((err) => {
            toast.error(`Algo salio mal en el login: ${err.message}`);
          });
      }
      break;
    default:
      {
        dispatch({
          type: types.login,
          payload: { uid, displayName, role },
        });
      }
      break;
  }
};
export const logout = () => {
  return { type: types.logout };
};

export const loginEmailPassword = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => {
        if (err.message == 'The password is invalid or the user does not have a password.') {
          toast.error('contraseña incorrecta');
          if (err.message == 'There is no user record corresponding to this identifier. The user may have been deleted.') {
            toast.error('no existe un usuario con este correo');
          }

        }
        console.log(err);
      });
  };
};

export const loginGoogle = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => {
        console.log('error', err);
      });
  };
};
export const loginFacebook = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(facebookAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => {
        console.log('error', err);
      });
  };
};

export const singOutAuth = () => async (dispatch) => {
  await firebase.auth().signOut();
  dispatch(logout());
};

export const registerWithEmailPasswordTeacher =
  (username, email, name, password) => async (dispatch) => {
    const userCredentials = {
      username,
      email,
      name,
      password,
      imageUrl: '',
      bio: 'escriba su presentacion',
      website: '',
      location: '',
      whatsapp: '',
      skills: [],
      github: '',
      facebook: '',
      twitter: '',
      instagram: '',
      linkedin: '',
      personalizedTutorials: [],
      sprintsToScore: [],
      codelingoChallegencesToScore: [],
      academicResourcesToScore: [],
      roleGeek: 'teacher',
      active: false,
    };
    db.doc(`/teachers/${username}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          toast.error(`Este usuario ${username} ya existe, intentente con otro. `);
        } else {
          return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password);
        }
      })
      .then((result) => {
        result.user.updateProfile({ displayName: name });
      })
      .then(() => {
        db.doc(`/teachers/${username}`).set(userCredentials);
      })
      .then(() => {
        toast.success('Te has registrado con éxito');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          toast.error('Este correo ya se encuentra registrado.');
        }
        console.log('error con correo registro', error.message);
      });
  };

export const registerNewAdmin =
  (email, password, fullName) => async (dispatch) => {
    const addAdminRole = functions.httpsCallable('addAdminRole');
    let newAdmin;
    addAdminRole({ email, password, fullName })
      .then((doc) => {
        const user = doc.data;
        newAdmin = {
          uid: user.uid,
          email,
          fullName,
          password,
          photoURL: 'https://firebasestorage.googleapis.com/v0/b/geekplatform-dc705.appspot.com/o/default-profile.png?alt=media&token=0f8bf7f6-acc2-451c-be86-c7800e3ca059',
          cover: 'https://firebasestorage.googleapis.com/v0/b/geekplatform-dc705.appspot.com/o/defaultPortada.png?alt=media&token=88ae3cac-2742-44f4-b7a4-ad373b451e2e',
          bio: '',
          whatsapp: '',
          linkedin: '',
          roleGeek: 'admin',
        };
        return db.collection('admin').doc(user.uid).set(newAdmin);
      })
      .then(() => {
        dispatch({ type: 'updateListarAdmin', payload: newAdmin });
      })
      .catch((err) => {
        toast.error('Algo ocurrió.');
        console.log(err);
      });
  };
export const registerNewTeacher =
  (email, password, fullName) => async (dispatch, getState) => {
    const estadoProfesores = getState().teachers.teachers;

    const addTeacherRole = functions.httpsCallable('addTeacherRole');
    addTeacherRole({ email, password, fullName })
      .then((doc) => {
        const user = doc.data;
        const nuevoProfesor = { email, password, fullName, uid: user.uid };
        const data = [...estadoProfesores, nuevoProfesor];
        dispatch({ type: 'listarTeachers', payload: data });
        db.collection('teachers')
          .doc(user.uid)
          .set({
            uid: user.uid,
            email,
            fullName,
            password,
            photoURL: 'https://firebasestorage.googleapis.com/v0/b/geekplatform-dc705.appspot.com/o/default-profile.png?alt=media&token=0f8bf7f6-acc2-451c-be86-c7800e3ca059',
            cover: 'https://firebasestorage.googleapis.com/v0/b/geekplatform-dc705.appspot.com/o/defaultPortada.png?alt=media&token=88ae3cac-2742-44f4-b7a4-ad373b451e2e',
            bio: 'escribe tu presentacion',
            website: '',
            location: '',
            whatsapp: '',
            skills: [],
            github: '',
            facebook: '',
            twitter: '',
            instagram: '',
            linkedin: '',
            roleGeek: 'teacher',
            personalizedTutorials: [],
            sprintsToScore: [], //
            codelingoChallegencesToScore: [],
            academicResourcesToScore: [],
            active: true,
          })
          .then(() => console.log('exito'));
      })
      .catch((err) => console.log(err));
  };

export const registerNewStudent = (email, password, fullName, corteId) => async (dispatch) => {
  console.log(email, password, fullName, corteId);
  const addStudentCorte = functions.httpsCallable('addStudentCorte');
  addStudentCorte({ corteId, email, password, fullName })
    .then((doc) => {
      const user = doc.data;
      const data = {
        uid: user.uid,
        email,
        fullName,
        password,
        corteId,
        photoURL: 'https://firebasestorage.googleapis.com/v0/b/geekplatform-dc705.appspot.com/o/default-profile.png?alt=media&token=0f8bf7f6-acc2-451c-be86-c7800e3ca059',
        cover: 'https://firebasestorage.googleapis.com/v0/b/geekplatform-dc705.appspot.com/o/defaultPortada.png?alt=media&token=88ae3cac-2742-44f4-b7a4-ad373b451e2e',
        bio: '',
        website: '',
        city: '',
        whatsapp: '',
        voted: true,
        skills: [],
        github: '',
        facebook: '',
        twitter: '',
        instagram: '',
        linkedin: '',
        geekyPuntos: 100,
        roleGeek: 'student',
        graduated: false,
        tutorialsRequired: [],
        codelingoChallengesDone: [],
        wakatime: [],
        active: true,
        myProjects: [],
        assistance: [],
        html: [],
        css: [],
        javascript: [],
        webpack: [],
        reactJs: [],
        reactHooks: [],
        redux: [],
        firebase: [],
        testing: [],
        mySprints: [],
        sigloXXI: [],
        designThinking: [],
      };
      db.collection('students').doc(user.uid)
        .set(data)
        .then(() => {
          alert(`estudiante ${data.fullName} ha sido creado`);
          console.log(data);
          dispatch({ type: 'addNewStudent', payload: data });
        });
    }).catch((err) => alert('error en el registro estudiante', err));
};

export const updateFirestoreStudent = (uid, newDataStudent) => async () => {
  try {
    await db.collection('students').doc(uid).set(newDataStudent, { merge: true });
    toast.success('Actualización éxitosa, recarga la pagina para ver cambios');
  } catch (error) {
    toast.error('Algo ocurrió en la actualización');
  }
};
export const updateFirestoreTeacher = (uid, newDataStudent) => async () => {
  try {
    await db.collection('teachers').doc(uid).set(newDataStudent, { merge: true });
    toast.success('Actualización éxitosa');
  } catch (error) {
    toast.error('Algo ocurrió en la actualización, recarga la pagina para ver cambios');
  }
};
export const updateFirestoreAdmin = (uid, newDataStudent) => async () => {
  try {
    await db.collection('admin').doc(uid).set(newDataStudent, { merge: true });
    toast.success('Actualización éxitosa, recarga la pagina para ver cambios');
  } catch (error) {
    toast.error('Algo ocurrió en la actualización');
  }
};
