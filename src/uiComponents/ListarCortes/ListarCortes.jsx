import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getFirestoreCortes } from '../../actions/adminActions';
import { getCortes } from '../../reducers/adminReducer';

const ListarCortes = () => {
  const cortes = useSelector(getCortes);
  const dispatch = useDispatch();
  useEffect(() => {
    if (cortes.length > 0) {
    } else {
      dispatch(getFirestoreCortes());
    }
  }, []);

  console.log(cortes);
  return (
    <div>
      <h1>Cortes</h1>
      <div>
        {cortes.length > 0 && cortes.map((corte) => {
          return (
            <div key={corte.corteId}>
              <Link to={`/corte/${corte.corteId}`}>
                <p>{corte.corteId}</p>
                )
              </Link>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default ListarCortes;
