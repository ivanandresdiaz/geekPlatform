import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listarAdmin } from '../../actions/adminActions';
import { ContainerContent } from '../../components/PanelAdmin/PanelAdminStyles';
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
    <>
      <ContainerContent>
        {admin.length > 0 && admin.map((admin) => (
          <ContainerContent key={admin.uid}>
            <p>{admin.fullName}</p>
          </ContainerContent>
        ))}
      </ContainerContent>
    </>
  );
};

export default ListarAdmin;
