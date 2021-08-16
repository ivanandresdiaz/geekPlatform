import React from 'react';
import CardRecursoAcademico from '../CardRecursoAcademico/CardRecursoAcademico';

const ListarRecursosAcademicos = (props) => {
  const { categoryData } = props;

  return (
    <div>
      {categoryData.map((resource) => <CardRecursoAcademico key={resource.id} resource={resource} />)}
    </div>
  );
};

export default ListarRecursosAcademicos;
