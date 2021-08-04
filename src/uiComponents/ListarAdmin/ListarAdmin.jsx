import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listarAdmin } from '../../actions/adminActions';
import { getAdmin } from '../../reducers/adminReducer';

const ListarAdmin = () => {
  const dispatch = useDispatch();
  const admin = useSelector(getAdmin);
  useEffect(() => {
    if (admin.length > 0) {
    } else {
      dispatch(listarAdmin());
    }
  }, []);
  return (
    <div>
      <h1>Listar Admin</h1>
      <div>
        {admin.length > 0 && admin.map((admin) => (
          <div key={admin.uid}>
            <p>{admin.fullName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListarAdmin;
