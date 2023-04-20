import { AlertColor } from '@mui/material';
import React, { useContext } from 'react';
import { Notification } from '../components';

type ContextProps = {
  getError: (msg: string) => void;
  getSuccess: (msg: string) => void;
};

//TODO: obtenemos el contexto de la aplicacion y lo tipamos con los metodos definidos en el types
const NotificationContext = React.createContext<ContextProps | null>(null);

//TODO: definimos los estados 
export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [msg, setMsg] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState<AlertColor | undefined>(
    undefined
  );

  //TODO: la funcion lo que hace es enviar setOpen osea abierto en falso, significa que lo cierra
  const handleClose = () => {
    setOpen(false);
  };

  //Todo: esta recibe un mensaje, cambia el color de la alerta y la abre y coloca el mensaje para los errors
  const getError = (msg: string) => {
    setSeverity('error');
    setOpen(true);
    setMsg(msg);
  };

  //Todo: esta recibe un mensaje, cambia el color de la alerta y la abre y coloca el mensaje para los mensajes exitosos
  const getSuccess = (msg: string) => {
    setSeverity('success');
    setOpen(true);
    setMsg(msg);
  };

  //TODO: definimos los 2 metodos
  const value = {
    getError,
    getSuccess,
  };
  return (
    //TODO: el notificaionContext.provider se usa pra que los demas componentes puedan usar estos 2 metodos
    <NotificationContext.Provider value={value}>
      <Notification
        handleClose={handleClose}
        open={open}
        severity={severity}
        message={msg}
      />
      {children}
    </NotificationContext.Provider>
  );
};

export const UseNotification = () => {
    const context = React.useContext(NotificationContext)
    if(!context) throw new Error("no existe contexto")
    return context;
}