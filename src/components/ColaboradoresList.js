import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination,
  TextField, Box
} from '@mui/material';
import ColaboradorDetail from './ColaboradorDetail';

const ColaboradoresList = () => {
  const [colaboradores, setColaboradores] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedColaborador, setSelectedColaborador] = useState(null);

  useEffect(() => {
    const fetchColaboradores = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/colaboradores');
        setColaboradores(response.data);
      } catch (error) {
        console.error('There was an error fetching the colaboradores!', error);
      }
    };

    fetchColaboradores();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRowClick = (colaborador) => {
    setSelectedColaborador(colaborador);
  };

  const filteredColaboradores = colaboradores.filter(colaborador =>
    colaborador.nombreCompleto.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box display="flex">
      <Box flex={1}>
        <TextField
          label="Buscar colaborador"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearch}
          fullWidth
          margin="normal"
        />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow style={{ backgroundColor: '#F3F4F6' }}>
                <TableCell style={{ fontWeight: 'bold'}}>Nombre Completo</TableCell>
                <TableCell style={{ fontWeight: 'bold'}}>Tipo de Documento</TableCell>
                <TableCell style={{ fontWeight: 'bold'}}>Número de Documento</TableCell>
                <TableCell style={{ fontWeight: 'bold'}}>Cargo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredColaboradores.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((colaborador) => (
                <TableRow 
                  key={colaborador._id} 
                  onClick={() => handleRowClick(colaborador)} 
                  style={{ 
                    cursor: 'pointer',
                    backgroundColor: selectedColaborador && selectedColaborador._id === colaborador._id ? '#F3F4F6' : 'white' 
                  }}
                >
                  <TableCell>{colaborador.nombreCompleto}</TableCell>
                  <TableCell>{colaborador.tipoDocumento}</TableCell>
                  <TableCell>{colaborador.numeroDocumento}</TableCell>
                  <TableCell>{colaborador.cargo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredColaboradores.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      {selectedColaborador && <ColaboradorDetail colaborador={selectedColaborador} />}
    </Box>
  );
};

export default ColaboradoresList;
