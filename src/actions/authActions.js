/* eslint-disable import/prefer-default-export */
import { types } from '../types';
import { firebase, googleAuthProvider, db, functions } from '../firebase/firebaseConfig';

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};
export const logout = () => {
  return { type: types.logout };
};

export const loginEmailPassword = (email, password) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => {
        console.log(err);
      });
  };

};

export const loginGoogle = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      }).catch((err) => { console.log('error', err); });
  };
};
export const loginFacebook = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(facebookAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      }).catch((err) => { console.log('error', err); });
  };
};

export const singOutAuth = () => async (dispatch) => {
  await firebase.auth().signOut();
  dispatch(logout());
};

export const registerWithEmailPasswordTeacher = (username, email, name, password) => async (dispatch) => {
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
    role: 'teacher',
    active: false,
  };
  db.doc(`/teachers/${username}`).get().then((doc) => {
    if (doc.exists) {
      alert(`este usuario ${username} ya existe, intentente de con otro `);
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
      alert('te has registrado con exito');
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        alert('este correo ya esta registrado');
      }
      console.log('error con correo registro', error.message);
    });
};

export const registerNewAdmin = (email, password, fullName) => async (dispatch) => {
  console.log('entro a nuevo register Admin');
  const addAdminRole = functions.httpsCallable('addAdminRole');
  addAdminRole({ email, password, fullName })
    .then((res) => {
      console.log('exito', res);
    }).catch((err) => console.log(err));

};
