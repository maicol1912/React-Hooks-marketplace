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
const CharacterPage:React.FC = ()=>{
    const {id} = useParams()

    let navigate = useNavigate()
    const [loading,setLoading] = React.useState<boolean>(true)
    const [character,setCharacter] = React.useState< ICharacter|null>(null);

    React.useEffect(()=>{
        characters.getById({id})
        .then((r:any)=>{
            setCharacter(r.data)
            setLoading(false)
        })
        .catch((e:any)=>{
            console.error(e)
        })
    },[])

    return (
      <Box sx={{ width: '100%' }}>
        <Button variant="outlined" sx={{ ml: '9em',mt:"1em" }} onClick={()=>navigate(`/character`)}>Atras</Button>
        <Container maxWidth="xl">
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <CircularProgress />
            </Box>
          ) : 
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