import React from 'react';

const NewsFeed = (props) => {

  const { handleGetNews } = props;

  return (
    <div>
      <h1>Noticias</h1>
      <div>
        <button type='button' onClick={() => handleGetNews('blogs')}>
          blogs
        </button>
        <button type='button' onClick={() => handleGetNews('memes')}>
          Memes
        </button>
        <button type='button' onClick={() => handleGetNews('resources')}>
          Recursos recomendados
        </button>
      </div>

    </div>
  );
};

export default NewsFeed;
