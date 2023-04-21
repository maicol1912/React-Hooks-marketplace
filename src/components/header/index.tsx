import React from 'react';
import { Box, Grid, Typography, Divider } from '@mui/material';

//Todo creamos un tipo de este header osea que es lo que recibe
type HeaderProps = {
  title: string;
  description: string;
  //Todo este tipo es que recibe un componente de manera opcional
  element?: React.ReactNode | null;
};
export const HeaderComponent: React.FC<HeaderProps> = ({
  //todo lo que el componene recibe
  title,
  description,
  element,
}) => {
  return (
    <div>
      <Box sx={{ width: '100%', height: '350px' }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ height: '100%' }}
        >
          <Grid item xs={5}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{ height: '100%' }}
            >
              <Grid item>
                <Typography variant="h1">{title}</Typography>
              </Grid>
              <Grid item sx={{ mt: 2 }}>
                <Typography>{description}</Typography>
              </Grid>
              {element !== undefined && (
                <Grid sx={{ mt: 4, width: '100%' }} item>
                  {element}
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </div>
  );
};
