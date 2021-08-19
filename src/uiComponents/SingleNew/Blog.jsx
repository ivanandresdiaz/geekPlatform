import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiMoreVertical } from 'react-icons/fi';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { addLikeResourceFirestoreBlog, removeLikeResourceFirestoreBlog } from '../../actions/socialGeekActions';
import { ImgBlog } from './styledBlog';
import { LikeCounter, Post, PostBottom, PostBottomLeft, PostCenter, PostDate, PostImg, PostProfileImg, PostTop, PostTopLeft, PostUsername, PostWrapper } from './SingleNewStyles';

const Blog = (props) => {
  const { resource, corteId, idBlog } = props;
  const userDataLogged = useSelector((state) => state.auth);
  const { slug, image, title, date, textTop, id } = resource;
  const dispatch = useDispatch();
  const [amountLikes, setAmountLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    setLiked(resource.likes.includes(userDataLogged.uid));
    setAmountLikes(resource.likes.length);
  }, []);
  const handleLike = (id, liked) => {
    if (liked) {
      dispatch(removeLikeResourceFirestoreBlog(corteId, id));
      setAmountLikes(amountLikes - 1);
      setLiked(false);
    } else {
      dispatch(addLikeResourceFirestoreBlog(corteId, id));
      setAmountLikes(amountLikes + 1);
      setLiked(true);
    }
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
          </PostTop>
          <PostCenter>
            <h4>Blog</h4>
            <p>
              {textTop.substring(0, 200)}
              {' '}
              <span>seguir leyendo ...</span>
            </p>

            <PostImg src={image} alt={resource.title} />
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

          {/* <Link to={`/blog/${corteId}/${uid}/${id}`}>Leer Blog Completo...</Link> */}

        </PostWrapper>
      </Post>

    </>
  );
};

export default Blog;
