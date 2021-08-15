import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFirestoreStudentsCorte } from '../../actions/studentsActions';
import { getStudentsCorte } from '../../reducers/studentsReducer';
import { DivContainerList, DivRowList, ImgStudent, ContainerPorcentajeAsistencia, PorcentajeAsistencia, ContainerPActivo, ContainerPInactivo, DivFullName, DivContainerInputCheckBox } from './styledListarStudentsCorte.js';
import { enviarFirestoreLista } from '../../actions/classroomActions';
import { Button5 } from '../../globalStyles'
import { ModalEstudiantes } from '../Modal/Modal';

const ListarStudentsCorte = (props) => {
  const [showModalE, setShowModalE] = useState(false);
  const OpenModalE = () => { setShowModalE((prevE) => !prevE); };
  const { corteId } = props;
  const dispatch = useDispatch();
  const studentsCorte = useSelector(getStudentsCorte);
  let dataListStudents = {};
  studentsCorte.forEach((student) => {
    dataListStudents = {
      ...dataListStudents,
      [student.uid]: {
        assistance: [...student.assistance, 0],
        uid: student.uid,
      }
    };
  });
  const [state, setState] = useState({});
  useEffect(() => {
    if (!(studentsCorte.length > 0)) {
      dispatch(getFirestoreStudentsCorte(corteId));
    }
  }, []);
  const handleInputChangeCheckbox = (evento, uid, assistance) => {
    if (evento.target.checked) {
      setState({
        ...state,
        [uid]: {
          [evento.target.name]: [...assistance, 1],
          uid,
        },
      });
    } else {
      setState({
        ...state,
        [uid]: {
          [evento.target.name]: [...assistance, 0],
          uid,
        },
      });
    }

  };
  const handleEnviarLista = () => {
    const preparacionLista = { ...dataListStudents, ...state };
    const listaEnviar = Object.entries(preparacionLista).map((item) => item[1]);
    console.log(preparacionLista);
    console.log(listaEnviar);
    dispatch(enviarFirestoreLista(corteId, listaEnviar));
  };
  return (
    <div style={{ width: '100%' }}>
      <DivContainerList>
        < DivRowList >
          <DivContainerInputCheckBox>
            <p>Asistencia</p>
          </DivContainerInputCheckBox>
          <div>
            <p>Nombre Completo</p>
          </div>
          <p>Estado</p>
          <p>Voto</p>
          <p>Porcentaje de asistencia</p>
        </DivRowList >
        {
          studentsCorte.length > 0 && studentsCorte.map((student) => {
            let porcentajeAsistencia;
            if (student.assistance.length > 0) {
              porcentajeAsistencia = Math.round((student.assistance.reduce((a, b) => a + b, 0) / student.assistance.length) * 100);
            } else {
              porcentajeAsistencia = 0;
            }
            return (
              <DivRowList key={student.uid}>
                <DivContainerInputCheckBox>
                  <input type='checkbox' name='assistance' onChange={(evento) => handleInputChangeCheckbox(evento, student.uid, student.assistance)} />
                </DivContainerInputCheckBox>

                <DivFullName>
                  {student.photoURL ? <ImgStudent src={student.photoURL} alt={student.fullName} /> : <ImgStudent src='https://firebasestorage.googleapis.com/v0/b/geekplatform-dc705.appspot.com/o/default-profile.png?alt=media&token=0f8bf7f6-acc2-451c-be86-c7800e3ca059' alt={student.fullName} />}

                  <p>
                    {student.fullName}
                  </p>
                </DivFullName>
                {student.active ? (<ContainerPActivo><p>Activo</p></ContainerPActivo>) : <ContainerPInactivo><p>Inactivo</p></ContainerPInactivo>}
                {student.voted ? <p>Votó</p> : <p>No ha votado</p>}
                {porcentajeAsistencia && (
                  <ContainerPorcentajeAsistencia>
                    <PorcentajeAsistencia porcentajeAsistencia={porcentajeAsistencia}>
                      <p>
                        {porcentajeAsistencia}
                        %
                      </p>
                    </PorcentajeAsistencia>
                  </ContainerPorcentajeAsistencia>
                )}
              </DivRowList>
            );
          })
        }
        <Button5 type='button' onClick={handleEnviarLista}>Enviar asistencia</Button5>
        <Button5 primary animate={{}} onClick={OpenModalE}>Agregar estudiante</Button5>
        <ModalEstudiantes corteId={corteId} showModalE={showModalE} setShowModalE={setShowModalE} />
      </DivContainerList >

    </div >
  );
};

export default ListarStudentsCorte;
