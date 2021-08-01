import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteRecursoAction } from '../../actions/bancoRecursosActions';
import { DivContainerCardRecurso } from './styledCardRecursoAcademico';

const CardRecursoAcademico = (props) => {
  const dispatch = useDispatch();
  const { category, description, fecha, recommendedBy, score, url, id } = props;
  const handleDeleteRecurso = (id) => {
    dispatch(deleteRecursoAction(id));
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
      <p>
        Recomendado por:
        {recommendedBy}
      </p>
      <p>
        Calificacion:
        {score}
      </p>
      <p>
        Link:
        <a href={url}>{url}</a>
      </p>
      <button type='button' onClick={() => handleDeleteRecurso(id)}>Eliminar Recurso</button>
    </DivContainerCardRecurso>
  );
};

export default CardRecursoAcademico;
