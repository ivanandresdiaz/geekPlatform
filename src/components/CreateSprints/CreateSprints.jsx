import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../hooks/useForm';
import { createNewSprint, uploadSprintPDF } from '../../actions/classroomActions';
import { getLoadedSprintPDF } from '../../reducers/salonReducer';

const CreateSprints = (props) => {
  const { corteId, salonId } = props;
  const loadedSprintPDF = useSelector(getLoadedSprintPDF);
  const [loadedPDF, setLoadedPDF] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(loadedSprintPDF);
    if (loadedSprintPDF.length > 0) {
      console.log('se cargo el PDF');
      setLoadedPDF(false);
    } else {
      setLoadedPDF(true);
    }
  }, [loadedSprintPDF]);
  const [formValues, handleInputChange, reset] = useForm({
    title: '',
    description: '',
    salonId: '',
    startDate: '',
    deadline: '',
    deliveryLink: '',
    supportLink1: '',
    supportLink2: '',
    supportLink3: '',
    supportLink4: '',
  });
  const {
    title,
    description,
    startDate,
    deadline,
    deliveryLink,
    supportLink1,
    supportLink2,
    supportLink3,
    supportLink4 } = formValues;
  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(formValues);
    dispatch(createNewSprint(corteId, salonId, title,
      description,
      startDate,
      deadline,
      deliveryLink,
      supportLink1,
      supportLink2,
      supportLink3,
      supportLink4));
    reset();
  };

  const handleUploadSprintPDF = (event) => {
    dispatch(uploadSprintPDF(event.target.files[0]));
  };
  return (
    <div>
      <h1>Crear Sprint</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='titulo del Sprint'
          name='title'
          value={title}
          onChange={handleInputChange}
          required
        />
        <textarea name='description' cols='30' rows='10' value={description} placeholder='descripcion del sprint' onChange={handleInputChange} />
        <input
          type='date'
          name='startDate'
          value={startDate}
          onChange={handleInputChange}
          required
        />
        <input
          type='date'
          name='deadline'
          value={deadline}
          onChange={handleInputChange}
          required
        />
        <input
          type='text'
          placeholder='link de entrega'
          name='deliveryLink'
          value={deliveryLink}
          onChange={handleInputChange}
          required
        />
        <input
          type='text'
          placeholder='link de apoyo 1'
          name='supportLink1'
          value={supportLink1}
          onChange={handleInputChange}
        />
        <input
          type='text'
          placeholder='link de apoyo 2'
          name='supportLink2'
          value={supportLink2}
          onChange={handleInputChange}
        />
        <input
          type='text'
          placeholder='link de apoyo 3'
          name='supportLink3'
          value={supportLink3}
          onChange={handleInputChange}
        />
        <input
          type='text'
          placeholder='link de apoyo 4'
          name='supportLink4'
          value={supportLink4}
          onChange={handleInputChange}
        />
        <input type='file' name='archivosubido' onChange={handleUploadSprintPDF} required />
        <button type='submit' disabled={loadedPDF}>Añadir Nuevo Sprint</button>
      </form>
    </div>
  );
};

export default CreateSprints;
