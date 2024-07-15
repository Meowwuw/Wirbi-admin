import React from 'react';
import { Box, Typography, Avatar, Button } from '@mui/material';
import { Email, Phone, CalendarToday, Work, Computer, Business, AccountBox, AttachMoney, FamilyRestroom, SupervisorAccount } from '@mui/icons-material';

const ColaboradorDetail = ({ colaborador }) => {
  return (
    <Box width="300px" padding="20px" borderLeft="1px solid #ddd">
      <Avatar alt={colaborador.nombreCompleto} src="/path/to/avatar.jpg" style={{ width: 100, height: 100, margin: '0 auto' }} />
      <Typography variant="h6" align="center" gutterBottom>{colaborador.nombreCompleto}</Typography>
      <Typography align="center" color="textSecondary">{colaborador.cargo}</Typography>
      <Box display="flex" justifyContent="center" marginBottom="10px">
        <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>Editar</Button>
        <Button variant="contained" color="secondary">Eliminar</Button>
      </Box>
      <Box>
        <Box display="flex" alignItems="center">
          <CalendarToday style={{ marginRight: 8 }} />
          <Typography>Cumpleaños: {new Date(colaborador.fechaNacimiento).toLocaleDateString()}</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Email style={{ marginRight: 8 }} />
          <Typography>Correo: {colaborador.correoCorporativo}</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Phone style={{ marginRight: 8 }} />
          <Typography>Teléfono: {colaborador.telefono}</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <AccountBox style={{ marginRight: 8 }} />
          <Typography>Documento: {colaborador.tipoDocumento} {colaborador.numeroDocumento}</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Computer style={{ marginRight: 8 }} />
          <Typography>Laptop: {colaborador.laptop ? "Sí" : "No"}</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Business style={{ marginRight: 8 }} />
          <Typography>Gerencia: {colaborador.gerencia}</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Work style={{ marginRight: 8 }} />
          <Typography>Cliente: {colaborador.cliente}</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <SupervisorAccount style={{ marginRight: 8 }} />
          <Typography>Jefe Directo: {colaborador.jefeDirecto}</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <CalendarToday style={{ marginRight: 8 }} />
          <Typography>Fecha de Ingreso: {new Date(colaborador.fechaIngreso).toLocaleDateString()}</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <AttachMoney style={{ marginRight: 8 }} />
          <Typography>Sueldo: {colaborador.sueldo}</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <FamilyRestroom style={{ marginRight: 8 }} />
          <Typography>Asignación Familiar: {colaborador.asignacionFamiliar ? "Sí" : "No"}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ColaboradorDetail;
