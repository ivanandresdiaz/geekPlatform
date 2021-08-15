import React, { useState } from 'react';

const useForm = (initialState = {}) => {

  const [values, setValues] = useState(initialState);

  const reset = (newStateForm = initialState) => {
    setValues(newStateForm);
  };

  const handleInputChange = ({ target }) => {
    if (target.type === 'checkbox') {
      setValues({
        ...values,
        [target.name]: target.checked,
      });
    } else {
      setValues({
        ...values,
        [target.name]: target.value,
      });
    }

  };

  return [values, handleInputChange, reset];
};

const CreateClassTopic = () => {
  const [formValues, handleInputChange, reset] = useForm({
    titleClass: '',
    datetime: '',
  });
  const { titleClass, datetime } = formValues;
  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(formValues);

  };
  return (
    <div>
      <h1>Crear Sprint</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='tema de la clase del dia'
          name='titleClass'
          value={titleClass}
          onChange={handleInputChange}
          required
        />
        <input type='datetime-local' name='datetime' onChange={handleInputChange} value={datetime} />
        <button type='submit'>Añadir Nuevo Sprint</button>
      </form>
    </div>
  );
};

export default CreateClassTopic;
