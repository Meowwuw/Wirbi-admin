import React from 'react';
import ColaboradoresList from './ColaboradoresList';
import PlanillasList from './PlanillasList';

const DashboardContent = ({ content }) => {
  switch (content) {
    case 'Colaboradores':
      return <ColaboradoresList />;
    case 'Planilla':
      return <PlanillasList />;
    default:
      return <h1>{content}</h1>;
  }
};

export default DashboardContent;
