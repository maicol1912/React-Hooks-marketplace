import React from 'react';
import {
  Container,
  Button,
  Grid,
  Paper,
  Box,
  Typography,
  TextField,
} from '@mui/material';
import {} from '@mui/material';
import { UseNotification } from '../../context/notification.context';
import { LoginValidate } from '../../utils/validateForm';

type loginType = {
  username:string;
  password:string;
};
export const LoginPage: React.FC<{}> = () => {
  //TODO: usamos el metodo getError de useNotification
  const { getError, getSuccess } = UseNotification();
  
  //definimos un login data que es el estado anterior y el setLoginData que es el nuevo estado
  const [loginData, setLoginData] = React.useState<loginType>({
    username: '',
    password: '',
  });

  //hacemos que cada que el textField cambie entonces el estado se actualize de lo que habia a lo que hay ahora
  const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  //cuando se envia el formulario obtenemos el loginData que es el formulario ya actualizado
  const handleSumbit = (e: React.FormEvent<HTMLInputElement>) => {
    //PreventDefault evita que la pagina se refesque y se pierdan los cambios
    e.preventDefault();
    LoginValidate.validate(loginData).then(()=>{
        getSuccess(JSON.stringify(loginData));
    }).catch((error:any)=>{
        getError(error.message)
    })
    
  };
  return (
    <Container maxWidth="sm">
      {/*El sx es usado para marcar los estilos de css dentro del codigo*/}
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' }}
      >
        <Grid item>
          {/*El paper es un div parecido al color de fondo pero no es el coloro de BG como tal*/}
          <Paper sx={{ padding: '1.2em', borderRadius: '0.5em' }}>
            {/*el box permite comportarse de difernete manera de componentes, en este caso se comporta como form*/}
            <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
              Iniciar Sesion
            </Typography>
            <Box component="form" onSubmit={handleSumbit}>
              <TextField
                name="username"
                margin="normal"
                type="text"
                fullWidth
                label="Email"
                sx={{ mt: 2, mb: 1.5 }}
                required
                onChange={dataLogin}
              />
              <TextField
                name="password"
                margin="normal"
                type="password"
                fullWidth
                label="Password"
                sx={{ mt: 1.5, mb: 1.5 }}
                required
                onChange={dataLogin}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 2 }}
              >
                Iniciar Sesion
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Button fullWidth variant="contained">
        Estamos en login
      </Button>
    </Container>
  );
};
