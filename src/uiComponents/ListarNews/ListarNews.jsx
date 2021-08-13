import React from 'react';

import SingleNew from '../SingleNew/SingleNew';

const ListarNews = (props) => {
  const { news, corteId, uid } = props;
  return (
    <div>
      <h1>Listar recursos academicos</h1>
      {news.map((resource) => <SingleNew key={resource.id} resource={resource} corteId={corteId} uid={uid} />)}
    </div>
  );
};

export default ListarNews;
