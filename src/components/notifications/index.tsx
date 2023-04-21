import { Alert, Snackbar, AlertColor, Typography } from '@mui/material';
import React from 'react';

type NotificationProp = {
  open: boolean;
  message: string;
  severity: AlertColor | undefined;
  handleClose: () => void;
};

export const Notification: React.FC<NotificationProp> = ({
  open,
  message,
  severity,
  handleClose,
}) => {
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
