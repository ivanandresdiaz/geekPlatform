import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteRecursoFirestore } from '../../actions/bancoRecursosActions';
import StarsRating from '../StarsRating/StarsRating';
import { DivContainerCardRecurso } from './styledCardRecursoAcademico';

const CardRecursoAcademico = (props) => {
  const { resource } = props;
  const { id, category, subCategory, title, link, format, level, english, description, photoURL, recommendedByPhotoURL, recommendedBy, userId, createdAt, score, aceppted, active } = resource;
  const dispatch = useDispatch();

  const handleDeleteRecurso = (id) => {
    dispatch(deleteRecursoFirestore(id));
  };
  return (
    <DivContainerCardRecurso>
      <p>
        categoria :
        {category}
      </p>
      <p>
        Description :
        {description}
      </p>
      <p>{category}</p>
      {photoURL && <img src={photoURL} alt={title} />}
      {recommendedByPhotoURL && <img src={recommendedByPhotoURL} alt={title} />}
      <p>
        Recomendado por:
        {recommendedBy}
      </p>
      <p>
        nivel del recurso:
        {level}
      </p>
      <p>
        tipo de recurso :
        {' '}
        {format}
      </p>
      {english && (
        <p>
          ingles
        </p>
      )}

      <p>
        palabra clave :
        {' '}
        {subCategory}
      </p>
      <p>
        Link:
        <a href={link}>{link}</a>
      </p>
      <StarsRating score={score} id={id} />
      <button type='button' onClick={() => handleDeleteRecurso(id)}>Eliminar Recurso</button>
    </DivContainerCardRecurso>
  );
};

export default CardRecursoAcademico;
