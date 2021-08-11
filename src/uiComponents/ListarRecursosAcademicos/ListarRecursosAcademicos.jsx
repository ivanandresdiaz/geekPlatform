import React from 'react';
import CardRecursoAcademico from '../CardRecursoAcademico/CardRecursoAcademico';

const ListarRecursosAcademicos = (props) => {
  const { categoryData } = props;

  return (
    <div>
      <h1>Listar recursos academicos</h1>
      {categoryData.map((resource) => <CardRecursoAcademico key={resource.id} resource={resource} />)}
    </div>
  );
};

export default ListarRecursosAcademicos;
