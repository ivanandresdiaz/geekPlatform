import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addLikeResourceFirestore, removeLikeResourceFirestore } from '../../actions/socialGeekActions';

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
    <div>
      { resource.photoURL && <img src={resource.photoURL} alt={resource.fullName} />}
      <Link to={`/socialGeek/${resource.uid}`}>
        Creador:
        {resource.fullName}
      </Link>
      <p>
        {resource.description}
      </p>
      <img src={resource.photoURLNews} alt={resource.description} />
      <p>
        Fecha de creacion:
        {fechaCreacion}
      </p>
      <button
        type='button'
        onClick={() => handleLike(resource.id, liked)}
      >
        {liked ? 'quitar like' : 'dar like'}
        {/* liked significa que el usuario ya le ha dado me gusta */}
      </button>
      <p>
        {amountLikes }
      </p>
    </div>
  );
};

export default SingleNew;
