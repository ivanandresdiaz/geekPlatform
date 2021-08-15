import React from 'react';
import { useDispatch } from 'react-redux';
import useForm from '../../hooks/useForm';
import { addFirestoreNewCategoryAcademicResource } from '../../actions/bancoRecursosActions';
import { FormInput, FormModal } from '../../uiComponents/Modal/ModalStyles';
import { Button5 } from '../../globalStyles';

const CreateNewCategory = (props) => {
  const { categories } = props;
  const dispatch = useDispatch();
  const [values, handleInputChange, reset] = useForm({
    category: '',
  });
  const { category } = values;
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addFirestoreNewCategoryAcademicResource(category, categories));
    reset();
  };
  return (
    <div>
      <FormModal style={{ marginBottom: '0px' }} >
        <label style={{ position: 'relative' }}>
          <FormInput
            style={{ marginTop: '0px' }}
            type='text'
            placeholder='Nueva categoria'
            name='category'
            value={category}
            onChange={handleInputChange}
            required
          />
          <Button5 style={{ position: 'absolute' }} type='submit' onClick={handleSubmit}>Agregar</Button5>
        </label>

      </FormModal>

    </div >
  );
};

export default CreateNewCategory;
