import React from 'react';
import { useDispatch } from 'react-redux';
import useForm from '../../hooks/useForm';
import { addFirestoreNewCategoryAcademicResource } from '../../actions/bancoRecursosActions';

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
      <h3>Lista de categorias</h3>
      <div>
        {categories.length > 0 && categories.map((category) => <p key={category}>{category}</p>)}
      </div>
      <p>Las categorias deben tener un nombre diferente</p>
      <form>
        <input
          type='text'
          placeholder='nueva categoria'
          name='category'
          value={category}
          onChange={handleInputChange}
          required
        />
        <button type='submit' onClick={handleSubmit}>Agregar nueva categoria</button>
      </form>

    </div>
  );
};

export default CreateNewCategory;
