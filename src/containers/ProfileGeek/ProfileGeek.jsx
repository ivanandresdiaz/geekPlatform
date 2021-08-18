import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { db } from '../../firebase/firebaseConfig';
import ProfileSocialGeek from '../../uiComponents/ProfileSocialGeek/ProfileSocialGeek';
import { getUserId } from '../../reducers/authReducer';
import NewsFeedCategories from '../../components/NewsFeedCategories/NewsFeedCategories';
import CreateNewsSocialGeek from '../../components/CreateNewsSocialGeek/CreateNewsSocialGeek';
import ListarNews from '../../uiComponents/ListarNews/ListarNews';
import { getFirestoreMyNewsCategory } from '../../actions/socialGeekActions';
import ListarPersonalProjects from '../../uiComponents/ListarPersonalProjects/ListarPersonalProjects';
import AddPersonalProjects from '../../components/AddPersonalProjects/AddPersonalProjects';
import ChartStudent from '../../components/ChartStudent/ChartStudent';
import { getMyNewsCategory } from '../../reducers/socialGeekReducer';
import ChartMySprints from '../../components/ChartMySprints/ChartMySprints';

const ProfileGeek = (props) => {
  const { match: { params: { profileUid, corteId } } } = props;
  const userDataLogged = useSelector((state) => state.auth);
  const myNews = useSelector(getMyNewsCategory);
  const dispatch = useDispatch();
  const loggedUidUser = useSelector(getUserId);
  const [profileSocialGeek, setProfileSocialGeek] = useState('');
  const [isUserAuth, setIsUserAuth] = useState(false);
  useEffect(() => {
    dispatch(getFirestoreMyNewsCategory(corteId, 'blogs', profileUid));
    if (loggedUidUser === profileUid) {
      setProfileSocialGeek(userDataLogged);
      setIsUserAuth(true);
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
        dispatch(getFirestoreMyNewsCategory(corteId, category, profileUid));
      }
    }, [],
  );
  return (
    <div>
      <h1>Bienvenido a social geek</h1>
      {profileSocialGeek &&
        (
          <div>
            <ProfileSocialGeek profileSocialGeek={profileSocialGeek} isUserAuth={isUserAuth} corteId={corteId} />
            {profileSocialGeek.roleGeek === 'student' && <ChartStudent profileSocialGeek={profileSocialGeek} />}
            {profileSocialGeek.roleGeek === 'student' && <ChartMySprints mySprints={profileSocialGeek.mySprints} />}
            {profileSocialGeek.roleGeek === 'student' && isUserAuth && <AddPersonalProjects profileSocialGeek={profileSocialGeek} />}
            {profileSocialGeek.roleGeek === 'student' && <ListarPersonalProjects personalProjects={profileSocialGeek.myProjects} />}
            <p>Mis noticias</p>
            <NewsFeedCategories handleGetNews={handleGetNews} />
            {isUserAuth && <CreateNewsSocialGeek corteId={corteId} />}
            <h5>Listar mis publicaciones</h5>
            <ListarNews news={myNews} />
          </div>

        )}

    </div>
  );
};

export default ProfileGeek;
