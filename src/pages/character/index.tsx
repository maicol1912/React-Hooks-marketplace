/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  Box,
  Container,
  Grid,
  CircularProgress,
  Typography,
  Divider,
  Chip,
  Button,
} from '@mui/material';
import { useNavigate, useParams } from "react-router-dom";
import { characters } from "../../api/characters";
import { ICharacter } from "./interface/character.interface";
//TODO: la exportacion por defecto se debe hacer para poder renderizar un componente con lazy load  
const CharacterPage:React.FC = ()=>{
    //TODO: obtenemos el parametro que fue enviado por la ruta con desestructuracion de objetos
    const {id} = useParams()

    //TODO: definimos la use navigate para mover entre rutas
    let navigate = useNavigate()
    const [loading,setLoading] = React.useState<boolean>(true)
    const [character,setCharacter] = React.useState< ICharacter|null>(null);

    //TODO: usamos un efecto que es algo que se ejecuta cuando pasa una accion
    React.useEffect(()=>{
        characters.getById({id})
        .then((r:any)=>{
            setCharacter(r.data)
            setLoading(false)
        })
        .catch((e:any)=>{
            console.error(e)
        })
    },/*En este caso como esta vacio se ejecuta cada que el componente se renderize*/[])

    return (
      <Box sx={{ width: '100%' }}>
        <Button variant="outlined" sx={{ ml: '9em',mt:"1em" }} onClick={()=>navigate(`/character`)}>Atras</Button>
        <Container maxWidth="xl">
          {/*Si esta cargando muestra el overload*/}
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <CircularProgress />
            </Box>
          ) : 
          //si no esta cargando renderiza el componente
          (
            <Grid sx={{ mt: 2 }} container columnSpacing={2}>
              <Grid item xs={6}>
                <Typography variant="h1" color="white">
                  {character!.name}
                </Typography>
                <Divider />
                <Typography variant="h6" color="white">
                  {character!.origin.name}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Chip
                    color="primary"
                    variant="outlined"
                    label={character!.status}
                  ></Chip>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <img
                  src={character!.image}
                  style={{ width: '100%', borderRadius: '0.5em' }}
                />
              </Grid>
            </Grid>
          )}
        </Container>
      </Box>
    );
}

export default CharacterPage