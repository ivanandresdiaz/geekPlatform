import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSprint, getFirestoreSprints } from '../../actions/classroomActions';
import { getSprints } from '../../reducers/salonReducer';

const ListarSprints = (props) => {
  const { corteId, salonId, role } = props;
  const dispatch = useDispatch();
  const sprints = useSelector(getSprints);
  useEffect(() => {
    dispatch(getFirestoreSprints(corteId, salonId));
  }, []);
  const handleDeleteSprint = (id) => {
    dispatch(deleteSprint(id, corteId));
  };
  return (
    <div>
      <h1>ListarSprinrs</h1>
      <div>
        {sprints.length > 0 && sprints.map((sprint) => (
          <div key={sprint.id}>
            <h4>
              nombre sprint :
              {sprint.title}
            </h4>
            <p>Descripcion</p>
            <p>{sprint.description}</p>
            <p>link de entrega</p>
            <a href={sprint.deliveryLink}>{sprint.deliveryLink}</a>
            <p>fecha de inicio</p>
            <p>{sprint.startDate}</p>
            <p>fecha de maxima de entrega</p>
            <p>{sprint.deadline}</p>
            <p>Links de apoyo</p>
            <a href={sprint.supportLink1}>{sprint.supportLink1}</a>
            <a href={sprint.supportLink2}>{sprint.supportLink2}</a>
            <a href={sprint.supportLink3}>{sprint.supportLink3}</a>
            <a href={sprint.supportLink4}>{sprint.supportLink4}</a>
            <a href={sprint.resourcePDF} download={sprint.title} target='_blank' rel='noreferrer'>Descargar PDF</a>
            {role === 'teacher' && <button type='button' onClick={() => handleDeleteSprint(sprint.id)}>Eliminar sprint</button>}
          </div>
        ))}
      </div>

    </div>
  );
};

export default ListarSprints;
