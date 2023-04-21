import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
//TODO: definimos las propiedades que tiene el componnete, las que va a recibir 
type CardProps = {
    image:string;
    name:string;
    species:string;
    status:string;
    id:number;
}
//TODO: le colocamos de que tipo de Type sera el componente y los atributos que llegan
export const CardComponent: React.FC<CardProps>= ({image,name,species,status,id}) => {
  let navigate = useNavigate()
  return (
    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="paella"
      />
      <CardContent>
        <Typography sx={{ mb: 1.5 }} variant="h6">
          {name}
        </Typography>
        <Divider />
        <Typography sx={{ mt: 1.5 }}>Specie:{species}</Typography>
        <Typography sx={{ mt: 1.5 }}>Status:{status}</Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="contained" size="small" onClick={()=>navigate(`/character/${id}`)}>
          Learn more
        </Button>
      </CardActions>
    </Card>
  );
};
