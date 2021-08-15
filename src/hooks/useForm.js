import { useState } from 'react';

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

export default useForm;
