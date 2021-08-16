import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { registerNewStudent } from '../../actions/authActions';
import { Button4 } from '../../globalStyles';
import useForm from '../../hooks/useForm';
import { FormInput, FormModal } from '../../uiComponents/Modal/ModalStyles';

const AddStudents = (props) => {
  const { corteId } = props;
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm({
    email: '',
    fullName: '',
    password: '',
    confirmPassword: '',
  });
  const { email, fullName, password, confirmPassword } = formValues;
  const handleSubmit = (evento) => {
    evento.preventDefault();
    if (formValues.password === formValues.confirmPassword) {
      dispatch(registerNewStudent(email, password, fullName, corteId));
      reset();
    } else {
      toast.error('Las contraseñas no coinciden');
    }
  };
  return (
    <div>
      <FormModal onSubmit={handleSubmit}>
        <FormInput
          type='text'
          placeholder='Nombre completo'
          name='fullName'
          value={fullName}
          onChange={handleInputChange}
          required
        />
        <FormInput
          type='email'
          placeholder='Correo electrónico'
          name='email'
          value={email}
          onChange={handleInputChange}
          required
        />
        <FormInput
          type='password'
          placeholder='Contraseña'
          name='password'
          value={password}
          onChange={handleInputChange}
          required
        />
        <FormInput
          type='password'
          placeholder='Confirmación de contraseña'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleInputChange}
          required
        />
        <Button4 type='submit'>Añadir Nuevo Estudiante</Button4>
      </FormModal>

    </div>
  );
};

export default AddStudents;
