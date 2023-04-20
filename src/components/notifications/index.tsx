import { Alert, Snackbar, AlertColor, Typography } from '@mui/material';
import React from 'react';

type NotificationProp = {
  open: boolean;
  message: string;
  severity: AlertColor | undefined;
  handleClose: () => void;
};

//TODO: creamos un componente que debe recibir argumentos como prop definidos en el Types
export const Notification: React.FC<NotificationProp> = ({
  open,
  message,
  severity,
  handleClose,
}) => {
    //TODO: esta retorna una alerta con las caracteristicaz que recibio de las llamadas de otros componentes
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={4000}
      open={open}
      onClose={handleClose}
    >
      <Alert severity={severity}>
        <Typography>{message}</Typography>
      </Alert>
    </Snackbar>
  );
};
