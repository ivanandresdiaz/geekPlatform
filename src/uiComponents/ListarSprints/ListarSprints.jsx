import React, { useEffect } from 'react';
import { FaFilePdf, FaLink } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSprint, getFirestoreSprints } from '../../actions/classroomActions';
import { ContainerContentSprint, ContainerRowSprint, ContainerSprints } from '../../containers/Salon/SalonStyles';
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
    <>
      {sprints.length > 0 && sprints.map((sprint) => (
        <ContainerSprints>
          <div key={sprint.id}>
            <ContainerContentSprint>
              <h4>
                {sprint.title}
              </h4>
              <p>{sprint.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', placeContent:'center' }}>
                <div style={{ flexDirection: 'column', padding: '3px 3px 3px 3px', textAlign: 'center' }}>
                  <p style={{ color: '#3CC5FF' }}>Formulario</p>
                  <a href={sprint.deliveryLink}><FaLink /></a>
                </div>
                <div style={{ flexDirection: 'column', padding: '3px 3px 3px 3px', textAlign: 'center' }}>
                  <p style={{ color: '#3CC5FF' }}>Fecha de inicio</p>
                  <p>{sprint.start}</p>
                </div>
                <div style={{ flexDirection: 'column', padding: '3px 3px 3px 3px', textAlign: 'center' }}>
                  <p style={{ color: '#3CC5FF' }}>Entrega máxima</p>
                  <p>{sprint.end}</p>
                </div>
                <div style={{ flexDirection: 'column', padding: '3px 3px 3px 3px', textAlign: 'center' }}>
                  <p style={{ color: '#3CC5FF' }}>Links de apoyo</p>
                  <a href={sprint.supportLink1}>{sprint.supportLink1}</a>
                  <a href={sprint.supportLink2}>{sprint.supportLink2}</a>
                  <a href={sprint.supportLink3}>{sprint.supportLink3}</a>
                  <a href={sprint.supportLink4}>{sprint.supportLink4}</a>
                </div>
                <div style={{ flexDirection: 'column', padding: '3px 3px 3px 3px', textAlign: 'center' }}>
                  <a href={sprint.resourcePDF} download={sprint.title} target='_blank' rel='noreferrer'> <FaFilePdf /> </a>
                  {role === 'teacher' && <button type='button' onClick={() => handleDeleteSprint(sprint.id)}>Eliminar sprint</button>}
                </div>
              </div>
            </ContainerContentSprint>
          </div>
        </ContainerSprints>
      ))}
    </>
  );
};

export default ListarSprints;
