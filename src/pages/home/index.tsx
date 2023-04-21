import React from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Pagination,
} from '@mui/material';
import { CardComponent, HeaderComponent } from '../../components';
import { characters } from '../../api/characters';
import { TypeCharacter } from './interface/character.interface';

export const HomePage: React.FC<{}> = () => {
  //TODO: se crea un estado de pagina para cambiar el paginado del componente 
  const [page, setPage] = React.useState(1);

  //TODO: se usa para obtener el numero de paginas que tienen los registros
  const [count, setCount] = React.useState(1);

  //TODO: una variable que obtiene los caracteres y se inicializa en null, puede ser lista o null
  const [allCharacters, setAllCharacters] = React.useState<
    TypeCharacter[] | null
  >(null);

  //TODO: para saber si esta cargando o no esta cargando la api
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    //Todo: cuando entre al efecto se pone a cargar
    setLoading(true);
    
    //TODO: llama el api 
    characters
      .getAll({ page })
      .then((r:any) => {
        //TODO: modifica el numero de paginas
        setCount(r.data.info.pages);

        //TODO: modifica los caracteres
        setAllCharacters(r.data.results);

        //TODO: quitamos el loadin con un segundo de retraso
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((e) => {
        console.error(e);
      });
  //TODO: aca le estamos diciendo que se active el effects cada vez que cambie page 
  }, [page]);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Container maxWidth="xl">
      <HeaderComponent
        title="Rick and morty Api"
        description="Enjoy the api"
        element={
          <Button fullWidth variant="contained" onClick={()=>window.location.reload()}>
            Refresh
          </Button>
        }
      />
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <div>
            {allCharacters!.length !== 0 ? (
              <Grid sx={{ my: 2 }} container spacing={2} direction="row">
                {allCharacters!.map((character) => (
                  <Grid item xs={3} key={character.id}>
                    <CardComponent
                      image={character.image}
                      name={character.name}
                      species={character.species}
                      status={character.status}
                      id={character.id}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              'No data'
            )}
          </div>
          <Box
            sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Pagination
              variant="outlined"
              color="primary"
              count={count}
              page={page}
              onChange={handleChange}
              sx={{ mb: 3 }}
              size="large"
            />
          </Box>
        </>
      )}
    </Container>
  );
};
