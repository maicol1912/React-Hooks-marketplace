import React from 'react';
import { Container, Button } from '@mui/material';
import { CardComponent, HeaderComponent } from '../../components';
import { characters } from '../../api/characters';

export const HomePage: React.FC<{}> = () => {
  
   React.useEffect(()=>{
     characters.getById({id:1}).then((r)=>{
        console.log(r.data)
     }).catch((e)=>{
        console.error(e)
     })
   },[])
   return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      {/*Creamos un componente y le enviamos los props como el title,description,element y 
      le enviamos un componente como atributo elemento*/
      }
      <HeaderComponent
        title="Hola mundo"
        description="hola mundo bienvenido a maicol1912"
        element={<Button fullWidth variant='contained'>Hola mundo</Button>}
      />
    </Container>
  );
};
