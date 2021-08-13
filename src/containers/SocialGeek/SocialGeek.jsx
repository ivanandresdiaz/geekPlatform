import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CreateNewsSocialGeek from '../../components/CreateNewsSocialGeek/CreateNewsSocialGeek';
import NewsFeedCategories from '../../components/NewsFeedCategories/NewsFeedCategories';
import ListarNews from '../../uiComponents/ListarNews/ListarNews';
import { getFirestoreNewsCategory } from '../../actions/socialGeekActions';
import { getNewsCategory } from '../../reducers/socialGeekReducer';

const SocialGeek = (props) => {
  const userDataLogged = useSelector((state) => state.auth);
  const news = useSelector(getNewsCategory);
  const dispatch = useDispatch();
  useEffect(() => {
    if (userDataLogged.corteId) {
      const { corteId } = userDataLogged;
      dispatch(getFirestoreNewsCategory(corteId, 'blogs'));
    } else {
      alert('no estas autenticado');
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
      <CreateNewsSocialGeek corteId={userDataLogged.corteId} uid={userDataLogged.uid} />
      <NewsFeedCategories handleGetNews={handleGetNews} />
      <ListarNews news={news} corteId={userDataLogged.corteId} uid={userDataLogged.uid} />
    </div>
  );
};

export default SocialGeek;
