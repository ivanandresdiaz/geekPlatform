import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSprint, getFirestoreSprints } from '../../actions/classroomActions';
import { ContainerContentSprint, ContainerRowSprint, ContainerSprints } from '../../containers/Salon/SalonStyles';
import { getSprints } from '../../reducers/salonReducer';


const ListarSprints = (props) => {
  const { corteId, salonId } = props;
  const dispatch = useDispatch();
  const sprints = useSelector(getSprints);
  useEffect(() => {
    dispatch(getFirestoreSprints(corteId, salonId));
  }, []);
  const handleDeleteSprint = (id) => {
    dispatch(deleteSprint(id, corteId));
  };
  return (
    <>
      <ContainerRowSprint>
        {sprints.length > 0 && sprints.map((sprint) => (
          <ContainerSprints>
            <div key={sprint.id}>
              <ContainerContentSprint>
                <h4>
                  {sprint.title}
                </h4>
                <p>{sprint.description}</p>
                {/* <p>link de entrega</p>
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
                <button type='button'> Descargar PDF (Aun no disponible)</button>
                <button type='button' onClick={() => handleDeleteSprint(sprint.id)}>Eliminar sprint</button> */}
              </ContainerContentSprint>
            </div>

          </ContainerSprints>
        ))}
      </ContainerRowSprint>
    </>
  );
};

export default ListarSprints;
