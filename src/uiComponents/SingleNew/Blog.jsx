/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiMoreVertical } from 'react-icons/fi';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import useForm from '../../hooks/useForm';
import { db } from '../../firebase/firebaseConfig';
import { addLikeResourceFirestoreBlog, removeLikeResourceFirestoreBlog, deleteFirestoreBlog } from '../../actions/socialGeekActions';
import { DivComments, ImgBlog } from './styledBlog';
import { LikeCounter, Post, PostBottom, PostBottomLeft, PostCenter, PostDate, PostImg, PostProfileImg, PostTop, PostTopLeft, PostUsername, PostWrapper } from './SingleNewStyles';

const Blog = (props) => {
  const { resource, corteId } = props;
  const userDataLogged = useSelector((state) => state.auth);
  const { slug, image, title, date, textTop, id, uid, html, css, javascript, webpack, reactJs, reactHooks, redux, firebase, testing, comments } = resource;
  const dispatch = useDispatch();
  const [amountLikes, setAmountLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [totalComments, setTotalComments] = useState(comments || []);
  const [showComments, setShowComments] = useState(false);
  const [formValues, handleInputChange, reset] = useForm({
    comment: '',
  });
  const { comment } = formValues;
  useEffect(() => {
    setLiked(resource.likes.includes(userDataLogged.uid));
    setAmountLikes(resource.likes.length);
  }, []);
  const handleLike = (id, uid, fullName, liked) => {
    if (liked) {
      dispatch(removeLikeResourceFirestoreBlog(corteId, id, uid, fullName));
      setAmountLikes(amountLikes - 1);
      setLiked(false);
    } else {
      dispatch(addLikeResourceFirestoreBlog(corteId, id, uid, fullName));
      setAmountLikes(amountLikes + 1);
      setLiked(true);
    }
  };
  const handleBringComments = () => {
    setShowComments(!showComments);
  };
  const handleSubmitComment = (event) => {
    event.preventDefault();
    db.collection('cortes').doc(corteId)
      .collection('blogs')
      .doc(id)
      .set({ comments: [{ comment, fullName: userDataLogged.fullName, photoURL: userDataLogged.photoURL, uid: userDataLogged.uid }, ...totalComments] }, { merge: true })
      .then(() => {
        setTotalComments([{ comment, fullName: userDataLogged.fullName, photoURL: userDataLogged.photoURL, uid: userDataLogged.uid }, ...totalComments]);
        reset();
      })
      .catch((err) => alert('error al agregrar tu comentario', err));
  };
  const handleDeleteBlog = () => {
    dispatch(deleteFirestoreBlog(corteId, id));
  };
  const handleDeleteComentario = (comment) => {
    const newComments = totalComments.filter((item) => item.comment !== comment);
    db.collection('cortes').doc(corteId)
      .collection('blogs')
      .doc(id)
      .update({ comments: newComments })
      .then(() => {
        setTotalComments({ comments: newComments });
        reset();
      })
      .catch((err) => alert('error al agregrar tu comentario', err));
  };
  return (
    <>
      <Post key={slug} className='card'>
        <PostWrapper>
          <PostTop>
            <PostTopLeft>
              {resource.photoURL ? <PostProfileImg src={resource.photoURL} alt={resource.fullName} /> : <PostProfileImg src='https://firebasestorage.googleapis.com/v0/b/geekplatform-dc705.appspot.com/o/default-profile.png?alt=media&token=0f8bf7f6-acc2-451c-be86-c7800e3ca059' alt={resource.fullName} />}

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <PostUsername>
                  <Link to={`/socialGeek/${corteId}/${resource.uid}`}>
                    {resource.fullName}
                  </Link>
                </PostUsername>
                <PostDate>
                  {date}
                </PostDate>
                <div>
                  <FiMoreVertical />
                </div>
              </div>
            </PostTopLeft>
            {
              userDataLogged.uid === uid && (
                <button type='button' onClick={handleDeleteBlog}>
                  Eliminar Blog
                </button>
              )
            }

          </PostTop>
          <PostCenter>
            <h3>Blog</h3>
            <div>
              <p>
                categorias del Blog:
              </p>
              {html && <p>html</p>}
              {css && <p>css</p>}
              {javascript && <p>javascript</p>}
              {webpack && <p>webpack</p>}
              {reactJs && <p>reactJs</p>}
              {reactHooks && <p>reactHooks</p>}
              {redux && <p>redux</p>}
              {firebase && <p>firebase</p>}
              {testing && <p>testing</p>}
            </div>

            <p>
              {textTop.substring(0, 200)}
              {' '}
            </p>
            <Link to={`/blog/${corteId}/${uid}/${id}`}>Leer Blog Completo...</Link>

            <PostImg src={image} alt={resource.title} />
          </PostCenter>
          <PostBottom>
            <PostBottomLeft>
              <button
                style={{ background: 'white', cursor: 'pointer' }}
                type='button'
                onClick={() => handleLike(resource.id, resource.uid, resource.fullName, liked)}
              >
                {liked ? <FcLike size={28} /> : <FcLikePlaceholder size={28} />}
              </button>
              <LikeCounter>
                {amountLikes}
              </LikeCounter>
              <form onSubmit={handleSubmitComment}>
                <input type='text' value={comment} onChange={handleInputChange} name='comment' required />
                <button type='submit'>Comentar</button>
              </form>
              <DivComments showComments={showComments}>
                <button type='button' onClick={handleBringComments}>
                  {showComments ? 'esconder comentarios' : 'ver comentarios'}
                </button>
                <div>
                  {totalComments.length > 0 ? totalComments.map((item, index) => {
                    return (
                      <div key={`comentario${id}${index}`}>

                        <p>{item.fullName}</p>
                        {item.photoURL ? <img src={item.photoURL} alt={item.fullName} /> : <img src='https://firebasestorage.googleapis.com/v0/b/geekplatform-dc705.appspot.com/o/default-profile.png?alt=media&token=0f8bf7f6-acc2-451c-be86-c7800e3ca059' alt={item.fullName} />}
                        <p>
                          {item.comment}
                        </p>
                        {userDataLogged.uid === item.uid && <button type='button' onClick={() => handleDeleteComentario(item.comment)}>Eliminar comentario</button>}
                      </div>
                    );
                  }) : <p>Sin comentarios</p>}
                </div>
              </DivComments>
            </PostBottomLeft>
          </PostBottom>
        </PostWrapper>
      </Post>

    </>
  );
};

export default Blog;
