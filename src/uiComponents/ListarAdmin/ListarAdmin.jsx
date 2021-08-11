import { motion } from 'framer-motion';
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
              <motion.p initial={{ x: -250 }} animate={{ x: 10 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}>{admin.fullName}</motion.p>
            </ContainerContent>
          ))}
      </ContainerContent>
    </>
  );
};

export default ListarAdmin;
