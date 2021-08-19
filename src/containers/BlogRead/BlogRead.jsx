import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getNewsCategory } from '../../reducers/socialGeekReducer';

const BlogRead = (props) => {
  const { match: { params: { corteId, uid, idBlog } } } = props;
  const news = useSelector(getNewsCategory);
  const blogArray = news.filter((item) => item.id === idBlog);
  const blog = blogArray[0];
  if (!(blogArray.length > 0)) {
    return (
      <div>
        <h1>Algo Salio Mal, esto no deberia pasar recargar y vuelve a intentar</h1>
        <Link to='/'>ir al Home</Link>
      </div>
    );
  }
  if (!(blog.categoryNews === 'blogs')) {
    return (
      <div>
        <h1>Esto no es un blog</h1>
        <p>Vuelve al home</p>
        <Link to='/'>ir al Home</Link>
      </div>
    );
  }
  return (
    <>
      <section key={blog.idBlog} className='card'>
        <img src={blog.image} alt={blog.title} />
        <div className='card-content'>
          <h2>
            {blog.title}
            {' '}
            &mdash;
            {' '}
            <span style={{ color: '#5e5e5e' }}>{blog.date}</span>
          </h2>
          <p>{blog.description}</p>
        </div>
        <p>{blog.textTop}</p>
        <p>{blog.textBottom}</p>
      </section>
    </>
  );

};

export default BlogRead;
