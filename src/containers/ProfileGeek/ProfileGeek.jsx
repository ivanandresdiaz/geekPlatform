import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { db } from '../../firebase/firebaseConfig';
import ProfileSocialGeek from '../../uiComponents/ProfileSocialGeek/ProfileSocialGeek';
import { getUserId } from '../../reducers/authReducer';
import NewsFeedCategories from '../../components/NewsFeedCategories/NewsFeedCategories';
import CreateNewsSocialGeek from '../../components/CreateNewsSocialGeek/CreateNewsSocialGeek';
import ListarNews from '../../uiComponents/ListarNews/ListarNews';
import { getFirestoreNewsCategory } from '../../actions/socialGeekActions';
import ListarPersonalProjects from '../../uiComponents/ListarPersonalProjects/ListarPersonalProjects';
import AddPersonalProjects from '../../components/AddPersonalProjects/AddPersonalProjects';
import ChartStudent from '../../components/ChartStudent/ChartStudent';

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
      dispatch(getFirestoreNewsCategory(corteId, 'blogs'));
    } else {
      db.collection('students').doc(profileUid).get()
        .then((doc) => {
          const data = { ...doc.data(), id: doc.id };
          setIsUserAuth(false);
          setProfileSocialGeek(data);
        })
        .catch((err) => {
          toast.error(`Algo salio mal al cargar el perfil, por favor recargue la página ${err.message}`);
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
            <ChartStudent profileSocialGeek={profileSocialGeek} />
            {isUserAuth && <AddPersonalProjects profileSocialGeek={profileSocialGeek} />}
            <ListarPersonalProjects personalProjects={profileSocialGeek.myProjects} />
            <p>Mis noticias</p>
            <NewsFeedCategories handleGetNews={handleGetNews} />
            {isUserAuth && <CreateNewsSocialGeek corteId={profileSocialGeek.corteId} />}

            <h5>Listar mis publicaciones</h5>
            <ListarNews news={[]} />
          </div>

        )}

    </div>
  );
};

export default ProfileGeek;
