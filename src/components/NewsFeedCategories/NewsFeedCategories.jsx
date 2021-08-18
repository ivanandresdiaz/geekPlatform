import React from 'react';
import { Button7 } from '../../globalStyles';

const NewsFeed = (props) => {

  const { handleGetNews } = props;

  return (
    <>
      <div style={{ width: '800px', margin: 'auto', height: 'auto', textAlign: 'center', marginBottom:'20px' }}>
        <div>
          <Button7 type='button' onClick={() => handleGetNews('blogs')}>
            Blogs
          </Button7>
          <Button7 type='button' onClick={() => handleGetNews('memes')}>
            Memes
          </Button7>
          <Button7 type='button' onClick={() => handleGetNews('resources')}>
            Recursos recomendados
          </Button7>
        </div>
      </div>
    </>
  );
};

export default NewsFeed;
