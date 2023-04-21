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
import { useFormik } from 'formik';

type loginType = {
  username: string;
  password: string;
};

export const LoginPage: React.FC<{}> = () => {
  const { getSuccess } = UseNotification();
  //TODO: creamos una constante de formik, usamos el useFormik y le mandamos el tipo de fields que este debe tener
  const formik = useFormik<loginType>({
    initialValues: {
      username: '',
      password: '',
    },
    //TODO: le enviamos el tipo validador de YUP / definido en carpeta utils
    validationSchema: LoginValidate,
    onSubmit: (values) => {
      //TODO: al enviar y pasar todas las validaciones hara el getSuccess
      getSuccess(JSON.stringify(values));
    },
  });

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
          {/*manejamos el sumbit por medio del handleSubmit de formik*/}
          <Box component="form" onSubmit={formik.handleSubmit}>
            <TextField
              name="username"
              margin="normal"
              type="text"
              fullWidth
              label="username"
              sx={{ mt: 2, mb: 1.5 }}
              //TODO: le enviamos el valor del field
              value={formik.values.username}
              //TODO: le manejamos el change de formik
              onChange={formik.handleChange}
              //TODO: manejamos los errores de formik con el nombre del field
              error={formik.touched.username && Boolean(formik.errors.username)}
              //TODO: enviamos el helperText y el nombre del field
              helperText={formik.touched.username && formik.errors.username}
            />
            <TextField
              name="password"
              margin="normal"
              type="password"
              fullWidth
              label="Password"
              sx={{ mt: 1.5, mb: 1.5 }}
              value={formik.values.password}
              onChange={formik.handleChange}
              /*si esta tocando el textField con touched vamos a pasar el error*/
              error={formik.touched.password && Boolean(formik.errors.password)}
              /*si esta tocando el textField con touched vamos a pasar el error*/
              helperText={formik.touched.password && formik.errors.password}
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