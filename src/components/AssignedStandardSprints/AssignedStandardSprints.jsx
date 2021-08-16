/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import useForm from '../../hooks/useForm';
import { assignedFirestoreSprint } from '../../actions/classroomActions';
import { Button4, Button5 } from '../../globalStyles';
import { FormInput, FormModal } from '../../uiComponents/Modal/ModalStyles';
import toast from 'react-hot-toast';

const CreateSprints = (props) => {
  const { corteId, salonId } = props;
  const [disabled, setDisabled] = useState(true);
  const [assignedSprint, setAssignedSprint] = useState('');
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm({
    start: '',
    end: '',
    deliveryLink: '',
  });
  const {
    start,
    end,
    deliveryLink,
  } = formValues;
  const handleAssignedSprint = (value) => {
    switch (value) {
      case 'mascotas':
        setDisabled(false);
        setAssignedSprint({
          corteId,
          salonId,
          title: 'Adopcion de mascotas',
          description: 'Evidenciar los conocimientos de fundamentos web, haciendo uso de HTML, CSS e implementando  JavaScript moderno.Hacer uso de marcos de trabajo CSS,implementación de preprocesadores y realizar páginas interactivas con JavaScript vanilla integrando Webpack y Babel',
          html: true,
          css: true,
          webpack: true,
          reactJs: false,
          reactHooks: false,
          redux: false,
          firebase: false,
          testing: false,
          imgSprint: 'https://firebasestorage.googleapis.com/v0/b/geekplatform-dc705.appspot.com/o/Imagen3.png?alt=media&token=3fce71c0-1ea6-4866-83a1-7f0bedbcecd6',
          resourcePDF: 'https://firebasestorage.googleapis.com/v0/b/geekplatform-dc705.appspot.com/o/Sprint%201%20-%20Frontend.pdf?alt=media&token=156d154c-e6e6-4e5a-a7d5-7a061de30384',
        });
        break;
      case 'guajolotas':
        setDisabled(false);
        setAssignedSprint({
          corteId,
          salonId,
          title: 'Guappjolotas',
          description: 'Evidenciar los concepto esenciales de ReactJS,Entender el ciclo de vida de componentes como clase. Aplicar y desarrollar SPA con ReactJS. Implementar y utilizar React Hooks en ReactJS. Enrutamiento dinámico.Desplegar aplicaciones de ReactJS en Netlify,Vercel',
          html: true,
          css: true,
          webpack: true,
          reactJs: true,
          reactHooks: true,
          redux: false,
          firebase: false,
          testing: false,
          imgSprint: 'https://firebasestorage.googleapis.com/v0/b/geekplatform-dc705.appspot.com/o/guajolotas.png?alt=media&token=83fe4329-6ac2-4a45-99e5-06251a14ff75',
          resourcePDF: 'https://firebasestorage.googleapis.com/v0/b/geekplatform-dc705.appspot.com/o/Sprint%202.pdf?alt=media&token=002e4386-da52-429d-a984-f6e8f5958674',
        });
        break;
      case 'blockMaster':
        setDisabled(false);
        setAssignedSprint({
          corteId,
          salonId,
          title: 'Block Master',
          description: 'React Hooks a profundidad, Componentes de orden superior, Introducción a la arquitectura Flux, Introducción y manipulación de Redux con ReactJS, Backend como servicio : Introducción y manipulación de Firebase',
          html: true,
          css: true,
          webpack: true,
          reactJs: true,
          reactHooks: true,
          redux: true,
          firebase: true,
          testing: false,
          imgSprint: 'https://firebasestorage.googleapis.com/v0/b/geekplatform-dc705.appspot.com/o/guajolotas.png?alt=media&token=83fe4329-6ac2-4a45-99e5-06251a14ff75',
          resourcePDF: 'https://firebasestorage.googleapis.com/v0/b/geekplatform-dc705.appspot.com/o/Sprint%202.pdf?alt=media&token=002e4386-da52-429d-a984-f6e8f5958674',
        });
        break;
      default:
        break;
    }
  };
  const handleSubmit = (evento) => {
    evento.preventDefault();
    ;
    if (assignedSprint.title.length > 0) {
      const newSprint = {
        ...assignedSprint,
        ...formValues,
      };
      dispatch(assignedFirestoreSprint(newSprint));
      reset();
    } else {
      toast.error('Por favor selecciona el sprint que vas a asignar');
    }
  };

  return (
    <div>
      <h1>Asignar sprint standard</h1>
      <div>
        <Button5 type='button' onClick={() => handleAssignedSprint('mascotas')}>Asignar Sprint 1 Adopcion Mascotas</Button5>
        <Button5 type='button' onClick={() => handleAssignedSprint('guajolotas')}>Asignar Sprint 2 Guajolotas</Button5>
        <Button5 type='button' onClick={() => handleAssignedSprint('blockMaster')}>Asignar Sprint 3 Block Master </Button5>
      </div>
      <FormModal onSubmit={handleSubmit}>
        <FormInput
          type='date'
          name='start'
          value={start}
          onChange={handleInputChange}
          required
        />
        <FormInput
          type='date'
          name='end'
          value={end}
          onChange={handleInputChange}
          required
        />
        <FormInput
          type='text'
          placeholder='link de entrega'
          name='deliveryLink'
          value={deliveryLink}
          onChange={handleInputChange}
          required
        />
        <Button4 type='submit' disabled={disabled}>
          Añadir Sprint
          {' '}
          {assignedSprint.title && assignedSprint.title}
        </Button4>
      </FormModal>
    </div>
  );
};

export default CreateSprints;
