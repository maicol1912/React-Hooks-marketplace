import { Box, AppBar, Toolbar, Container, Grid, Button, Typography, Stack } from "@mui/material"
import React from "react";

export const NavBar: React.FC<{}> = () => {
    return (
        //TODO sx para llamar los estilos en linea de materialUi
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Typography>Maicol</Typography>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={2}>
                                    <Button variant="contained">Login</Button>
                                    <Button variant="outlined">Register</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )

}