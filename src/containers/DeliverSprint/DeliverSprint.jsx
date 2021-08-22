import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../hooks/useForm';
import { sendMySprint } from '../../actions/classroomActions';

const DeliverSprint = (props) => {
  const { match: { params: { sprintId, corteId } } } = props;
  const dispatch = useDispatch();
  const userDataLogged = useSelector((state) => state.auth);
  const [formValues, handleInputChange, reset] = useForm({
    linkGithub: '',
    linkDespliegue: '',
  });
  const { linkGithub, linkDespliegue } = formValues;

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(sendMySprint(sprintId, linkGithub, linkDespliegue));
    reset();
  };
  if (userDataLogged.uid) {
    const isAlreadySent = userDataLogged.sprintsEnviados.filter((item) => item.sprintId === sprintId);
    if (isAlreadySent.length > 0) {
      return (
        <h1>
          Ya enviaste este sprint
        </h1>
      );
    }
    return (
      <div>
        <h1>Entregar sprint</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Link de Github
            <input type='text' value={linkGithub} name='linkGithub' onChange={handleInputChange} required />
          </label>
          <label>
            Link de despliegue
            <input type='text' value={linkDespliegue} name='linkDespliegue' onChange={handleInputChange} required />
          </label>
          <button type='submit'>Enviar mi sprint</button>
        </form>
      </div>
    );

  }

};

export default DeliverSprint;
