import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProfileSocialGeek from '../../uiComponents/ProfileSocialGeek/ProfileSocialGeek';
import { getUserId } from '../../reducers/authReducer';
import NewsFeedCategories from '../../components/NewsFeedCategories/NewsFeedCategories';
import CreateNewsSocialGeek from '../../components/CreateNewsSocialGeek/CreateNewsSocialGeek';
import ListarNews from '../../uiComponents/ListarNews/ListarNews';
import { getFirestoreNewsCategory } from '../../actions/socialGeekActions';

const ProfileGeek = (props) => {
  const { match: { params: { profileUid } } } = props;
  const userDataLogged = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const loggedUidUser = useSelector(getUserId);
  const [profileSocialGeek, setProfileSocialGeek] = useState('');
  const [isUserAuth, setIsUserAuth] = useState(false);
  useEffect(() => {
    if (loggedUidUser === profileUid) {
      setProfileSocialGeek(userDataLogged);
      setIsUserAuth(true);
      const { corteId } = userDataLogged;
      dispatch(getFirestoreNewsCategory(corteId, category));
    } else {
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
  const handleGetNews = useCallback(
    (category) => {
      if (userDataLogged) {
        const { corteId } = userDataLogged;
        dispatch(getFirestoreNewsCategory(corteId, category));
      }

    }, [],
  );

  return (
    <div>
      <h1>Bienvenido a social geek</h1>
      {profileSocialGeek &&
        (
          <div>
            <ProfileSocialGeek profileSocialGeek={profileSocialGeek} isUserAuth={isUserAuth} />
            <NewsFeedCategories handleGetNews={handleGetNews} />
            <CreateNewsSocialGeek corteId={profileSocialGeek.corteId} />
            <ListarNews news={[]} />
          </div>

        )}

    </div>
  );
};

export default ProfileGeek;
