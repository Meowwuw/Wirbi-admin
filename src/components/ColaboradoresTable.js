import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ColaboradoresTable = () => {
  const [colaboradores, setColaboradores] = useState([]);

  useEffect(() => {
    axios.get('https://wirbi-391801.uc.r.appspot.com/api/colaboradores')
      .then(response => {
        setColaboradores(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the colaboradores!', error);
      });
  }, []);


  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre Completo</TableCell>
            <TableCell>Tipo de Documento</TableCell>
            <TableCell>Número de Documento</TableCell>
            <TableCell>Cargo</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {colaboradores.map((colaborador) => (
            <TableRow key={colaborador._id}>
              <TableCell>{colaborador.nombreCompleto}</TableCell>
              <TableCell>{colaborador.tipoDocumento}</TableCell>
              <TableCell>{colaborador.numeroDocumento}</TableCell>
              <TableCell>{colaborador.cargo}</TableCell>
              <TableCell>
                {/* Botones de Editar y Eliminar */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ColaboradoresTable;
