import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../hooks/useForm';
import Group from '../../components/Group/Group';
import { createWorkGroups, generateTemplateGroups } from '../../actions/classroomActions';
import { getStudentsCorte } from '../../reducers/studentsReducer';
import { getFirestoreStudentsCorte } from '../../actions/studentsActions';
import { getPlantillaCreatingGroups } from '../../reducers/salonReducer';

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
        alert('seleccione la cantidad de grupos');
      }
    } else {
      dispatch(getFirestoreStudentsCorte(corteId));
      alert('los estudiantes no han cargado, intentelo de nuevo');
    }

  };
  return (
    <div>
      <h1>Crear nuevo Grupo</h1>
      <p>Debes seleccionar la cantidad de grupos que quieres crear</p>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='nombre de actividad en grupos'
          name='title'
          value={formValues.title}
          onChange={handleInputChange}
          required
        />
        <select value={cantidad} placeholder='¿Cuantos grupos?' name='cantidad' onChange={handleInputChange} required>
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
        </select>
        <button type='submit'>generar plantillas</button>
      </form>

      <Group key={id} columnOrder={columnOrder} columns={columns} tasks={tasks} title={title} id={id} salonId={salon} corteId={corteId} />

    </div>
  );
};

export default CreateNewGroups;

