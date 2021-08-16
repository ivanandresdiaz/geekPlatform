import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import CreateNewsSocialGeek from '../../components/CreateNewsSocialGeek/CreateNewsSocialGeek';
import NewsFeedCategories from '../../components/NewsFeedCategories/NewsFeedCategories';
import ListarNews from '../../uiComponents/ListarNews/ListarNews';
import { getFirestoreNewsCategory } from '../../actions/socialGeekActions';
import { getNewsCategory } from '../../reducers/socialGeekReducer';
import RankingGeekyPuntos from '../../uiComponents/RankingGeekyPuntos/RankingGeekyPuntos';
import ListarStudentsCorte from '../../uiComponents/ListarStudentsCorte/ListarStudentsCorte';

const SocialGeek = (props) => {
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
    <div>
      <h1>Bienvenido a social geek</h1>
      <Link to={`/socialGeek/${userDataLogged.uid}`}>
        Ir a mi perfil
        {' '}
        {userDataLogged.fullName}
      </Link>
      <RankingGeekyPuntos corteId={userDataLogged.corteId} />
      <ListarStudentsSocialGeek corteId={userDataLogged.corteId} />
      <CreateNewsSocialGeek corteId={userDataLogged.corteId} uid={userDataLogged.uid} />
      <NewsFeedCategories handleGetNews={handleGetNews} />
      <ListarNews news={news} corteId={userDataLogged.corteId} uid={userDataLogged.uid} />

    </div>
  );
};

export default SocialGeek;
