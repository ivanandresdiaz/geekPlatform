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
        {teachers.length > 0 && teachers.map((teacher) => (
          <ContainerContent key={teacher.uid}>
            <p>
              {teacher.fullName}
            </p>
            </ContainerContent>
        ))}
          </ContainerContent>
    </>
      );
};

      export default ListarTeachers;
