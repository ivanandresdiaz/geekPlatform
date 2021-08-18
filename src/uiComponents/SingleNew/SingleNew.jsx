import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FiMoreVertical } from 'react-icons/fi';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { addLikeResourceFirestore, removeLikeResourceFirestore } from '../../actions/socialGeekActions';
import { LikeCounter, Post, PostBottom, PostBottomLeft, PostCenter, PostDate, PostImg, PostProfileImg, PostTop, PostTopLeft, PostUsername, PostWrapper } from './SingleNewStyles';

const SingleNew = (props) => {
  const { corteId, uid, resource } = props;

  const [amountLikes, setAmountLikes] = useState(0);
  const [liked, setLiked] = useState(false);
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

  return (
    <>
      <Post>
        <PostWrapper>
          <PostTop>
            <PostTopLeft>
              {resource.photoURL ? <PostProfileImg src={resource.photoURL} alt={resource.fullName} /> : <PostProfileImg src='https://firebasestorage.googleapis.com/v0/b/geekplatform-dc705.appspot.com/o/default-profile.png?alt=media&token=0f8bf7f6-acc2-451c-be86-c7800e3ca059' alt={resource.fullName} />}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <PostUsername>
                  <Link to={`/socialGeek/${resource.uid}`}>
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
            </PostBottomLeft>
          </PostBottom>
        </PostWrapper>
      </Post>
    </>
  );
};

export default SingleNew;
