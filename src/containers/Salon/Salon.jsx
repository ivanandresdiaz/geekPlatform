import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRole } from '../../reducers/authReducer';
import { getSalonData } from '../../reducers/salonReducer';
import { getFirestoreSalon } from '../../actions/classroomActions';
import CreateSprints from '../../components/CreateSprints/CreateSprints';
import ListarSprints from '../../uiComponents/ListarSprints/ListarSprints';
import ListarWorkGroups from '../../uiComponents/ListarWorkGroups/ListarWorkGroups';
import NavbarAdmin from '../../components/Structure/NavbarAdmin';
import Footer from '../../components/Structure/Footer';
import AssignedStandardSprints from '../../components/AssignedStandardSprints/AssignedStandardSprints';

const Salon = (props) => {
  const role = useSelector(getRole);
  const { match: { params: { salon, corteId } } } = props;
  const salonData = useSelector(getSalonData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFirestoreSalon(corteId, salon));
  }, []);
  if (salonData.length > 0) {
    const sprintsArray = Object.keys(salonData.sprints);
    console.log(sprintsArray);
  }
  return (
    <>
      <NavbarAdmin />
      <h1>
        Bienvenido al salon
        {' '}
        {salonData.salonName}
      </h1>
      {role === 'teacher' && (
        <CreateSprints corteId={corteId} salonId={salon} />
      )}
      {role === 'teacher' && (
        <AssignedStandardSprints corteId={corteId} salonId={salon} />
      )}

      <ListarSprints corteId={corteId} salonId={salon} role={role} />
      <h1>AQUI VA LA AGENDA DE TUTORIAS EXTRAS</h1>
      {role === 'teacher' && (
        <Link to={`/corte/${corteId}/${salon}/createGroups`}>
          Crear Nuevos grupos de trabajo LINK !!! SOLO PROFESOR
        </Link>
      )}

      <ListarWorkGroups corteId={corteId} salonId={salon} />
      <Footer />
    </>
  );
};

export default Salon;
