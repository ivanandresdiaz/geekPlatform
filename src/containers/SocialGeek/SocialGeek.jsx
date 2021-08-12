import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProfileSocialGeek from '../../uiComponents/ProfileSocialGeek/ProfileSocialGeek';
import { getUserId } from '../../reducers/authReducer';

const SocialGeek = (props) => {
  const { match: { params: { profileUid } } } = props;
  const loggedUidUser = useSelector(getUserId);
  const userDataLogged = useSelector((state) => state.auth);
  const [profileSocialGeek, setProfileSocialGeek] = useState('');
  const [isUserAuth, setIsUserAuth] = useState(false);
  useEffect(() => {
    if (loggedUidUser === profileUid) {
      setProfileSocialGeek(userDataLogged);
      setIsUserAuth(true);
    } else {
      console.log('otro usuario');
      db.collection('students').doc(profileUid).get()
        .then((doc) => {
          const data = { ...doc.data(), id: doc.id };
          setIsUserAuth(false);
          setProfileSocialGeek(data);
        })
        .catch((err) => {
          alert(`algo salio mal al cargar el perfil, por favor recargue la pagina ${err.message}`);
        });
    }
  }, []);
  console.log('profileSocialGeek', profileSocialGeek);
  return (
    <div>
      <h1>Bienvenido a social geek</h1>
      <ProfileSocialGeek profileSocialGeek={profileSocialGeek} isUserAuth={isUserAuth} />
    </div>
  );
};

export default SocialGeek;
