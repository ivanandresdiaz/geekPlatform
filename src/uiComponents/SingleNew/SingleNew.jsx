/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FiMoreVertical } from 'react-icons/fi';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { db } from '../../firebase/firebaseConfig';
import Blog from './Blog';
import useForm from '../../hooks/useForm';
import { DivComments } from './styledBlog';
import { addLikeResourceFirestore, deleteFirestoreNews, removeLikeResourceFirestore } from '../../actions/socialGeekActions';
import { LikeCounter, Post, PostBottom, PostBottomLeft, PostCenter, PostDate, PostImg, PostProfileImg, PostTop, PostTopLeft, PostUsername, PostWrapper } from './SingleNewStyles';

const SingleNew = (props) => {
  const { corteId, uid, resource } = props;
  const userDataLogged = useSelector((state) => state.auth);
  const { comments } = resource;
  if (resource.categoryNews === 'blogs') {
    return (<Blog resource={resource} corteId={corteId} uid={uid} />);
  }
  const [amountLikes, setAmountLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [totalComments, setTotalComments] = useState(resource.comments || []);
  const [showComments, setShowComments] = useState(false);
  const [formValues, handleInputChange, reset] = useForm({
    comment: '',
  });
  const { comment } = formValues;
  const dispatch = useDispatch();
  useEffect(() => {
    setLiked(resource.likes.includes(uid));
    setAmountLikes(resource.likes.length);
  }, []);
  const handleLike = (id, liked) => {
    if (liked) {
      dispatch(removeLikeResourceFirestore(corteId, id));
      setAmountLikes(amountLikes - 1);
      setLiked(false);
    } else {
      dispatch(addLikeResourceFirestore(corteId, id));
      setAmountLikes(amountLikes + 1);
      setLiked(true);
    }
  };

  const obtenerFecha = (timeStamp) => {
    const d = new Date(timeStamp);
    let month = `${d.getMonth() + 1}`;
    let day = `${d.getDate()}`;
    const year = d.getFullYear();
    if (month.length < 2) month = `0${month}`;
    if (day.length < 2) day = `0${day}`;
    return [day, month, year].join('/');
  };
  const fechaCreacion = obtenerFecha(resource.createdAt.toDate());
  const handleBringComments = () => {
    setShowComments(!showComments);
  };
  const handleSubmitComment = (event) => {
    event.preventDefault();
    db.collection('cortes').doc(corteId)
      .collection('news')
      .doc(resource.id)
      .set({ comments: [{ comment, fullName: userDataLogged.fullName, photoURL: userDataLogged.photoURL }, ...totalComments] }, { merge: true })
      .then(() => {
        setTotalComments([{ comment, fullName: userDataLogged.fullName, photoURL: userDataLogged.photoURL }, ...totalComments]);
        reset();
      })
      .catch((err) => alert('error al agregrar tu comentario', err));
  };
  const handleDeleteBlog = () => {
    dispatch(deleteFirestoreNews(corteId, resource.id));
  };
  return (
    <>
      <Post>
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
                  {fechaCreacion}
                </PostDate>
              </div>
              <div>
                <FiMoreVertical />
              </div>
            </PostTopLeft>
            {
              userDataLogged.uid === resource.uid && (
                <button type='button' onClick={handleDeleteBlog}>
                  Eliminar Blog
                </button>
              )
            }
          </PostTop>
          <PostCenter>

            <p>{resource.description}</p>
            <p><PostImg src={resource.photoURLNews} alt={resource.description} /></p>
          </PostCenter>
          <PostBottom>
            <PostBottomLeft>
              <button
                style={{ background: 'white', cursor: 'pointer' }}
                type='button'
                onClick={() => handleLike(resource.id, liked)}
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
                      <div key={`comentario${resource.id}${index}`}>
                        <p>{item.fullName}</p>
                        {item.photoURL ? <img src={item.photoURL} alt={item.fullName} /> : <img src='https://firebasestorage.googleapis.com/v0/b/geekplatform-dc705.appspot.com/o/default-profile.png?alt=media&token=0f8bf7f6-acc2-451c-be86-c7800e3ca059' alt={item.fullName} />}
                        <p>
                          {item.comment}
                        </p>
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

export default SingleNew;
