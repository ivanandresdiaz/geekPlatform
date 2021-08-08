import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFirestoreSprints } from '../../actions/classroomActions';
import { getSprints } from '../../reducers/salonReducer';

const ListarSprints = (props) => {
  const { corteId, salonId } = props;
  const dispatch = useDispatch();
  const sprints = useSelector(getSprints);
  useEffect(() => {
    console.log('salonId', salonId);
    dispatch(getFirestoreSprints(corteId, salonId));
  }, []);
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
          </div>
        ))}
      </div>

    </div>
  );
};

export default ListarSprints;
