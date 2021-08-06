import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listarTeachers } from '../../actions/teachersActions';
import { ContainerContent } from '../../components/PanelAdmin/PanelAdminStyles';
import { getTeachers } from '../../reducers/teachersReducer';

const ListarTeachers = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(getTeachers);
  useEffect(() => {
    if (teachers.length > 0) {
    } else {
      dispatch(listarTeachers());
    }
  }, []);
  return (
    <>
      <ContainerContent>
        <ContainerContent>
          {teachers.length > 0 && teachers.map((teacher) => <p style={{
            fontWeight: "500", color: "#C2C2C2", marginTop: "8px",
            marginbottom: "8px"
          }} key={teacher.uid}>{teacher.fullName}</p>)}
        </ContainerContent>
      </ContainerContent>
    </>
  );
};

export default ListarTeachers;
