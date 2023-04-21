import {
  Box,
  AppBar,
  Toolbar,
  Container,
  Grid,
  Button,
  Typography,
  Stack,
  IconButton,
  Badge,
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import { CartComponent } from './Cart';

export const NavBar: React.FC<{}> = () => {
  const navigate = useNavigate();

  //TODO: obtenemos la lista de items del reducer
  const items = useAppSelector((state)=>state.cartReducer)

  //TODO: tenemos un estado de open para cambiarlo
  const [open,setOpen] = React.useState<boolean>(false)

  const handleStateViewDrawer = () => {
    setOpen((state) => !state);
  };

  return (
    //TODO sx para llamar los estilos en linea de materialUi
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography>Maicol1912</Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2}>
                  <IconButton
                    color="primary"
                    onClick={() => handleStateViewDrawer()}
                  >
                    <Badge color="error" badgeContent={items.length}>
                      <ShoppingCartOutlinedIcon />
                    </Badge>
                  </IconButton>
                  <Button variant="contained" onClick={() => navigate('login')}>
                    Login
                  </Button>
                  <Button variant="outlined">Register</Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <CartComponent
        open={open}
        handleStateViewDrawer={handleStateViewDrawer}
      />
    </Box>
  );
};
