import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFirestoreCortes } from '../../actions/adminActions';
import { getCortes } from '../../reducers/adminReducer';
import { ContainerContent, LinkCortes } from '../../components/PanelAdmin/PanelAdminStyles';

const ListarCortes = () => {
  const cortes = useSelector(getCortes);
  const dispatch = useDispatch();
  useEffect(() => {
    if (cortes.length > 0) {
    } else {
      dispatch(getFirestoreCortes());
    }
  }, []);

  return (
    <>
      <ContainerContent>
        {cortes.length > 0 && cortes.map((corte) => {
          return (
            <ContainerContent key={corte.corteId}>
              <LinkCortes to={`/corte/${corte.corteId}`}>
                <p>{corte.corteId}</p>
              </LinkCortes>
            </ContainerContent>
          );
        })}
      </ContainerContent>

    </>
  );
};

export default ListarCortes;
