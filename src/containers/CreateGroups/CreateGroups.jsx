import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import useForm from '../../hooks/useForm';
import Group from '../../components/Group/Group';
import { createWorkGroups, generateTemplateGroups } from '../../actions/classroomActions';
import { getStudentsCorte } from '../../reducers/studentsReducer';
import { getFirestoreStudentsCorte } from '../../actions/studentsActions';
import { getPlantillaCreatingGroups } from '../../reducers/salonReducer';
import NavbarTeacher from '../../components/Structure/NavbarTeacher';
import Footer from '../../components/Structure/Footer';
import { ContainerTitleGreet } from '../Salon/SalonStyles';
import { FormInput, FormModal } from '../../uiComponents/Modal/ModalStyles';
import { ContainerNewGroup, SelectPlantillas } from './CreateGroupsStyles';
import { Button4, Button5 } from '../../globalStyles';

const CreateNewGroups = (props) => {
  const { match: { params: { salon, corteId } } } = props;
  const plantillaCreatingGroups = useSelector(getPlantillaCreatingGroups);
  const { columnOrder, columns, tasks, title, id } = plantillaCreatingGroups;
  ;
  const dispatch = useDispatch();
  const studentsCorte = useSelector(getStudentsCorte);
  const [formValues, handleInputChange, reset] = useForm({
    cantidad: '',
    title: '',
  });
  const { cantidad } = formValues;
  const handleSubmit = (evento) => {
    evento.preventDefault();
    if (studentsCorte.length > 0) {
      if (cantidad.length > 0) {
        dispatch(generateTemplateGroups(formValues.title, cantidad));
        reset();
      } else {
        toast.error('Seleccione la cantidad de grupos');
      }
    } else {
      dispatch(getFirestoreStudentsCorte(corteId));
      toast.error('Los estudiantes no han cargado, intentelo de nuevo');
    }

  };
  return (
    <>
      <NavbarTeacher />

      <ContainerTitleGreet>
        <h1>Crear nuevo Grupo</h1>
        <p>Debes seleccionar la cantidad de grupos que quieres crear</p>
      </ContainerTitleGreet>
      <div style={{ margin: '30px, 30px, 0px, 160px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <ContainerNewGroup>
            <FormModal onSubmit={handleSubmit}>
              <FormInput
                style={{ marginBottom: '5px' }}
                type='text'
                placeholder='Nombre de actividad grupal'
                name='title'
                value={formValues.title}
                onChange={handleInputChange}
                required
              />
              <SelectPlantillas style={{ marginBottom: '5px' }} value={cantidad} placeholder='¿Cuántos grupos?' name='cantidad' onChange={handleInputChange} required>
                <option value=''> Seleccione</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
              </SelectPlantillas>
              <Button4 type='submit'>Generar Plantillas</Button4>
            </FormModal>
            <Group key={id} columnOrder={columnOrder} columns={columns} tasks={tasks} title={title} id={id} salonId={salon} corteId={corteId} />
          </ContainerNewGroup>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateNewGroups;

