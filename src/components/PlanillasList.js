import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid, Box, TextField } from '@mui/material';
import PlanillaDetail from './PlanillaDetail';

const PlanillasList = () => {
  const [colaboradores, setColaboradores] = useState([]);
  const [selectedColaborador, setSelectedColaborador] = useState(null);
  const [planillas, setPlanillas] = useState([]);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchColaboradores = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/colaboradores');
        console.log('Colaboradores fetched:', response.data);
        setColaboradores(response.data);
      } catch (error) {
        console.error('There was an error fetching the colaboradores!', error);
        setError('Hubo un error al obtener los colaboradores. Inténtalo de nuevo más tarde.');
      }
    };

    fetchColaboradores();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCardClick = async (colaborador) => {
    setSelectedColaborador(colaborador);
    try {
      console.log('Selected colaborador:', colaborador);
      const response = await axios.get(`http://localhost:5000/api/planillas?colaboradorId=${colaborador._id}`);
      console.log('Planillas fetched:', response.data);
      setPlanillas(response.data);
      setError(''); // Clear any previous errors
    } catch (error) {
      console.error('Error fetching planillas!', error);
      console.log('Error details:', error.response?.data || error.message);
      setPlanillas([]);
      setError('Hubo un error al obtener las planillas. Inténtalo de nuevo más tarde.');
    }
  };

  const filteredColaboradores = colaboradores.filter((colaborador) =>
    colaborador.nombreCompleto.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box display="flex" flexDirection="column" p={2}>
      <TextField
        label="Buscar Colaborador"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
        fullWidth
        margin="normal"
      />
      <Box display="flex">
        <Grid container spacing={2}>
          {filteredColaboradores.map((colaborador) => (
            <Grid item xs={12} sm={6} md={4} key={colaborador._id}>
              <Card 
                onClick={() => handleCardClick(colaborador)} 
                style={{ cursor: 'pointer', backgroundColor: selectedColaborador && selectedColaborador._id === colaborador._id ? '#F3F4F6' : 'white' }}
              >
                <CardContent>
                  <Typography variant="h6">{colaborador.nombreCompleto}</Typography>
                  <Typography color="textSecondary">{colaborador.cargo}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {selectedColaborador && (
          <PlanillaDetail colaborador={selectedColaborador} planillas={planillas} />
        )}
      </Box>
      {error && (
        <Typography color="error" variant="body1">{error}</Typography>
      )}
    </Box>
  );
};

export default PlanillasList;