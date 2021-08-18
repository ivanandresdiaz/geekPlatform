import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import CreateNewsSocialGeek from '../../components/CreateNewsSocialGeek/CreateNewsSocialGeek';
import NewsFeedCategories from '../../components/NewsFeedCategories/NewsFeedCategories';
import ListarNews from '../../uiComponents/ListarNews/ListarNews';
import { getFirestoreNewsCategory } from '../../actions/socialGeekActions';
import { getNewsCategory } from '../../reducers/socialGeekReducer';
import RankingGeekyPuntos from '../../uiComponents/RankingGeekyPuntos/RankingGeekyPuntos';
import ListarStudentsSocialGeek from '../../uiComponents/ListarStudentsSocialGeek/ListarStudentsSocialGeek';
import { getRole } from '../../reducers/authReducer';
import NavbarTeacher from '../../components/Structure/NavbarTeacher';
import NavbarAdmin from '../../components/Structure/NavbarAdmin';
import NavbarStudent from '../../components/Structure/NavbarStudent';
import Footer from '../../components/Structure/Footer';
import ListarCodelingoChallenges from '../../uiComponents/ListarCodelingoChallenges/ListarCodelingoChallenges';
import { Sidebar } from './SocialGeekStyles';

const SocialGeek = (props) => {
  const role = useSelector(getRole);
  const userDataLogged = useSelector((state) => state.auth);
  const news = useSelector(getNewsCategory);
  const dispatch = useDispatch();
  useEffect(() => {
    if (userDataLogged.corteId) {
      const { corteId } = userDataLogged;
      dispatch(getFirestoreNewsCategory(corteId, 'blogs'));
    } else {
      toast.error('No estás autenticado');
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
    <>
      <div style={{ background: '#F2F2F2' }}>
        {role === 'teacher' && (
          <NavbarTeacher />
        )}
        {role === 'admin' && (
          <NavbarAdmin />
        )}
        {role === 'student' && (
          <NavbarStudent />
        )}
        <div style={{ display: 'flex', width: '100', background: '#F2F2F2' }}>
          <Sidebar>
            <RankingGeekyPuntos corteId={userDataLogged.corteId} />
            <div>
              <h2>Retos codelingo</h2>
              <ListarCodelingoChallenges />
            </div>
          </Sidebar>
          <div style={{ flex: '5', margin: '30px 120px' }}>
            <CreateNewsSocialGeek corteId={userDataLogged.corteId} uid={userDataLogged.uid} />
            <NewsFeedCategories handleGetNews={handleGetNews} />
            <ListarNews news={news} corteId={userDataLogged.corteId} uid={userDataLogged.uid} />
          </div>
          <div style={{ flex: '3.5' }}>
            <ListarStudentsSocialGeek corteId={userDataLogged.corteId} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SocialGeek;
