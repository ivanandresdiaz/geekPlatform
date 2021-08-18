import React from 'react';

import SingleNew from '../SingleNew/SingleNew';

const ListarNews = (props) => {
  const { news, corteId, uid } = props;
  return (
    <>
      <div>
        {news.length > 0 ?
          news.map((resource) => <SingleNew key={resource.id} resource={resource} corteId={corteId} uid={uid} />) :
          <p>no hay publicaciones para mostrar</p>}
      </div>
    </>
  );
};

export default ListarNews;
