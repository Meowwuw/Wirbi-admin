import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { Assignment, AttachMoney, DateRange, NotInterested, WorkOutline } from '@mui/icons-material';

const PlanillaDetail = ({ colaborador, planillas }) => {
  return (
    <Box width="300px" padding="20px" borderLeft="1px solid #ddd">
      <Avatar alt={colaborador.nombreCompleto} src="/path/to/avatar.jpg" style={{ width: 100, height: 100, margin: '0 auto' }} />
      <Typography variant="h6" align="center" gutterBottom>{colaborador.nombreCompleto}</Typography>
      <Typography align="center" color="textSecondary">{colaborador.cargo}</Typography>
      {planillas.length > 0 ? (
        planillas.map((planilla) => (
          <Box key={planilla._id} mt={2}>
            <Typography><DateRange /> Mes: {planilla.mes}</Typography>
            <Typography><NotInterested /> Faltas: {planilla.faltas}</Typography>
            <Typography><WorkOutline /> Días de Vacaciones: {planilla.diasVacaciones}</Typography>
            <Typography><AttachMoney /> Monto a Depositar: {planilla.montoDepositar}</Typography>
            <Typography><Assignment /> Retención: {planilla.retencion}</Typography>
            <Typography><Assignment /> ESSALUD: {planilla.essalud}</Typography>
            <Typography><Assignment /> AFP por Pagar: {planilla.afpPorPagar}</Typography>
            <Typography><Assignment /> CTS por Pagar: {planilla.ctsPorPagar}</Typography>
            <Typography><Assignment /> Gratificación por Pagar: {planilla.gratificacionPorPagar}</Typography>
          </Box>
        ))
      ) : (
        <Typography>No planillas found for {colaborador.nombreCompleto}</Typography>
      )}
    </Box>
  );
};

export default PlanillaDetail;
