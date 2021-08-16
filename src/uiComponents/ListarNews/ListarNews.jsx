import React from 'react';

import SingleNew from '../SingleNew/SingleNew';

const ListarNews = (props) => {
  const { news, corteId, uid } = props;
  return (
    <div>
      {news.map((resource) => <SingleNew key={resource.id} resource={resource} corteId={corteId} uid={uid} />)}
    </div>
  );
};

export default ListarNews;
