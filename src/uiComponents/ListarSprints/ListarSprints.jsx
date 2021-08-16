/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFilePdf, FaLink } from 'react-icons/fa';
import { BsFolderSymlink } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { deleteSprint, getFirestoreSprints } from '../../actions/classroomActions';
import { ContainerContentSprint, ContainerSprints } from '../../containers/Salon/SalonStyles';
import { getSprints } from '../../reducers/salonReducer';
import { Button4 } from '../../globalStyles';

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
  console.log(sprints);
  return (
    <>
      <h4>Sprints</h4>
      {sprints.length > 0 && sprints.map((sprint) => {
        console.log('resourcePDF', sprint.resourcePDF);
        return (
          <ContainerSprints key={sprint.id}>
            <motion.div whileHover={{ scale: 1.050 }}>
              <div>
                <ContainerContentSprint>
                  <h4>
                    {sprint.title}
                  </h4>
                  <p>{sprint.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', placeContent: 'center' }}>
                    <div style={{ flexDirection: 'column', padding: '5px 5px 5px 5px', textAlign: 'center' }}>
                      <p style={{ color: '#3CC5FF' }}>Formulario</p>
                      <a href={sprint.deliveryLink}><FaLink /></a>
                    </div>
                    <div style={{ flexDirection: 'column', padding: '5px 5px 5px 5px', textAlign: 'center' }}>
                      <p style={{ color: '#3CC5FF' }}>Fecha de inicio</p>
                      <p style={{ color: ' #ff3b53' }}>{sprint.start}</p>
                    </div>
                    <div style={{ flexDirection: 'column', padding: '5px 5px 5px 5px', textAlign: 'center' }}>
                      <p style={{ color: '#3CC5FF' }}>Entrega máxima</p>
                      <p style={{ color: ' #ff3b53' }}>{sprint.end}</p>
                    </div>
                    <div style={{ flexDirection: 'column', padding: '5px 5px 5px 5px', textAlign: 'center' }}>
                      <p style={{ color: '#3CC5FF' }}>Links de apoyo</p>
                      <a style={{ padding: '5px 5px 5px 5px' }} href={sprint.supportLink1} target='_blank' rel='noreferrer'><BsFolderSymlink /></a>
                      <a style={{ padding: '5px 5px 5px 5px' }} href={sprint.supportLink2} target='_blank' rel='noreferrer'><BsFolderSymlink /></a>
                      <a style={{ padding: '5px 5px 5px 5px' }} href={sprint.supportLink3} target='_blank' rel='noreferrer'><BsFolderSymlink /></a>
                      <a style={{ padding: '5px 5px 5px 5px' }} href={sprint.supportLink4} target='_blank' rel='noreferrer'><BsFolderSymlink /></a>
                    </div>
                    <div style={{ flexDirection: 'column', padding: '5px 5px 5px 5px', textAlign: 'center' }}>
                      <p style={{ color: '#3CC5FF' }}>PDF</p>
                      <a href={sprint.resourcePDF} target='_blank' rel='noreferrer'>
                        {' '}
                        <FaFilePdf />
                        {' '}
                      </a>
                    </div>
                  </div>
                  {role === 'teacher' && <Button4 type='button' primary onClick={() => handleDeleteSprint(sprint.id)}>Eliminar sprint</Button4>}
                  {role === 'teacher' && <Link to={`/scoreSprints/${sprint.id}`}><Button4>Calificar</Button4></Link>}
                </ContainerContentSprint>
              </div>
            </motion.div>
          </ContainerSprints>
        );
      })}
    </>
  );
};
export default ListarSprints;
