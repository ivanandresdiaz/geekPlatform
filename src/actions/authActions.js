/* eslint-disable import/prefer-default-export */
import { types } from '../types';
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';

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

export const registerWithEmailPassword = (email, password, name) => async (dispatch) => {
  try {
    const autenticando = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const { user } = autenticando;
    await user.updateProfile({ displayName: name });
    dispatch(login(user.uid, user.displayName));
    alert('te has registrado con exito');
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      alert('este correo ya esta registrado, vuelve al login o solicita cambio de contraseña');
    }
    console.log('error con correo registro', error);
  }
};
