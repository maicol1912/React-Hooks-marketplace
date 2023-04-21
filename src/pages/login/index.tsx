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
const LoginPage: React.FC<{}> = () => {
  const { getSuccess } = UseNotification();
  const formik = useFormik<loginType>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: LoginValidate,
    onSubmit: (values) => {
      getSuccess(JSON.stringify(values));
    },
  });

return (
  <Container maxWidth="sm">
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh' }}
    >
      <Grid item>
        <Paper sx={{ padding: '1.2em', borderRadius: '0.5em' }}>
          <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
            Iniciar Sesion
          </Typography>
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
              error={formik.touched.password && Boolean(formik.errors.password)}
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
export default LoginPage