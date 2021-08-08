import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSalonData } from '../../reducers/salonReducer';
import { getFirestoreSalon } from '../../actions/classroomActions';
import CreateSprints from '../../components/CreateSprints/CreateSprints';
import ListarSprints from '../../uiComponents/ListarSprints/ListarSprints';
import Group from '../../components/Group/Group';
import ListarWorkGroups from '../../uiComponents/ListarWorkGroups/ListarWorkGroups';

const Salon = (props) => {
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
    <div>
      <h1>
        Bienvenido al salon
        {' '}
        {salonData.salonName}
      </h1>

      <CreateSprints corteId={corteId} salonId={salon} />
      <ListarSprints corteId={corteId} salonId={salon} />
      <h1>AQUI VA LA AGENDA DE TUTORIAS EXTRAS</h1>
      <Link to={`/corte/${corteId}/${salon}/createGroups`}>
        Crear Nuevos grupos de trabajo
      </Link>
      <ListarWorkGroups corteId={corteId} salonId={salon} />
    </div>
  );
};

export default Salon;
