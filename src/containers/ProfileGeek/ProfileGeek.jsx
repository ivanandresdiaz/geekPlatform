import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { db } from '../../firebase/firebaseConfig';
import ProfileSocialGeek from '../../uiComponents/ProfileSocialGeek/ProfileSocialGeek';
import { getRole, getUserId } from '../../reducers/authReducer';
import NewsFeedCategories from '../../components/NewsFeedCategories/NewsFeedCategories';
import CreateNewsSocialGeek from '../../components/CreateNewsSocialGeek/CreateNewsSocialGeek';
import ListarNews from '../../uiComponents/ListarNews/ListarNews';
import { getFirestoreMyNewsCategory } from '../../actions/socialGeekActions';
import ListarPersonalProjects from '../../uiComponents/ListarPersonalProjects/ListarPersonalProjects';
import AddPersonalProjects from '../../components/AddPersonalProjects/AddPersonalProjects';
import ChartStudent from '../../components/ChartStudent/ChartStudent';
import { getMyNewsCategory } from '../../reducers/socialGeekReducer';
import ChartMySprints from '../../components/ChartMySprints/ChartMySprints';
import NavbarTeacher from '../../components/Structure/NavbarTeacher';
import NavbarAdmin from '../../components/Structure/NavbarAdmin';
import NavbarStudent from '../../components/Structure/NavbarStudent';
import Footer from '../../components/Structure/Footer';

const ProfileGeek = (props) => {
  const role = useSelector(getRole);
  const { match: { params: { profileUid, corteId } } } = props;
  const userDataLogged = useSelector((state) => state.auth);
  const myNews = useSelector(getMyNewsCategory);
  const dispatch = useDispatch();
  const loggedUidUser = useSelector(getUserId);
  const [profileSocialGeek, setProfileSocialGeek] = useState('');
  const [isUserAuth, setIsUserAuth] = useState(false);
  useEffect(() => {
    dispatch(getFirestoreMyNewsCategory(corteId, 'memes', profileUid));
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
    <>
      {role === 'admin' && (
        <NavbarAdmin />
      )}
      {role === 'student' && (
        <NavbarStudent />
      )}
      {profileSocialGeek &&
        (
          <div style={{ display: 'flex', width: '100', background: '#F2F2F2' }}>
            <div style={{ flex: '5', margin: '30px 120px' }}>
              <ProfileSocialGeek profileSocialGeek={profileSocialGeek} isUserAuth={isUserAuth} />
              <NewsFeedCategories handleGetNews={handleGetNews} />
              {isUserAuth && <CreateNewsSocialGeek corteId={corteId} />}
              {/* <h5>Listar mis publicaciones</h5> */}
              {/* <ListarNews news={myNews} /> */}
            </div>
            <div style={{ flex: '5', margin: '30px' }}>
              {profileSocialGeek.roleGeek === 'student' && <ChartStudent profileSocialGeek={profileSocialGeek} />}
              {profileSocialGeek.roleGeek === 'student' && <ChartMySprints mySprints={profileSocialGeek.mySprints} />}
            </div>
          </div>
        )}
      <Footer />
    </>
  );
};

export default ProfileGeek;

// {/* {profileSocialGeek.roleGeek === 'student' && isUserAuth && <AddPersonalProjects profileSocialGeek={profileSocialGeek} />} */}
//               {/* {profileSocialGeek.roleGeek === 'student' && <ListarPersonalProjects personalProjects={profileSocialGeek.myProjects} />} */}
