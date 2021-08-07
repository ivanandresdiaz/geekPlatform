import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getFirestoreSalones } from '../../actions/adminActions';
import { getSalones } from '../../reducers/adminReducer';

const ListarSalones = (props) => {
  const { corteId } = props;
  const dispatch = useDispatch();
  const salones = useSelector(getSalones);
  useEffect(() => {
    dispatch(getFirestoreSalones(corteId));
  }, []);

  return (
    <div>
      <h1>Salones listados</h1>
      <div>
        {salones.length > 0 && salones.map((salon) => (
          <div key={salon.salonId}>
            <Link to={`/corte/${corteId}/${salon.salonId}`}>
              <p>{salon.salonName}</p>
            </Link>
          </div>

        ))}
      </div>

    </div>
  );
};

export default ListarSalones;
