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
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addToCart } from '../../redux/slices/cart.slice';
import { setItem } from '../../utils/localStorage';
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
  //TODO: estado para manejar el estado de los botones si desactivado o no
  const [disableBtn, setDisableBtn] = React.useState<boolean>(false)

  let navigate = useNavigate()

  //TODO definimos una variable como UseAppDispatch que sirve para enviar acciones
  const dispatch = useAppDispatch()

  //TODO: consumimos el carReducer que es una lista de items
  const itemExist = useAppSelector((state)=>state.cartReducer)

  //TODO: hacemos un effect para que se ejecute
  React.useEffect(()=>{
    //TODO: si el id existe dentro de la lista entonces el boton esta disabled sino no 
    itemExist.some((item) => item.id === id)
      ? setDisableBtn(true)
      : setDisableBtn(false);
    //TODO: cada que se ejecute el itemExists entonces se guardara ese item en el localstorage
    setItem('cart',itemExist)
  },/*se ejecutara cada que el itemExist o el id cambie o se cargue*/[itemExist,id])
  const handleAddToCart = ()=>{
    //TODO: enviamos una accion de addToCart y le enviamos la desestructuracion del objeto que llega
    dispatch(addToCart({
      id,
      name,
      image,
      info:status
    }))
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="194" image={image} alt="paella" />
      <CardContent>
        <Typography sx={{ mb: 1.5 }} variant="h6">
          {name}
        </Typography>
        <Divider />
        <Typography sx={{ mt: 1.5 }}>Specie:{species}</Typography>
        <Typography sx={{ mt: 1.5 }}>Status:{status}</Typography>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          variant="contained"
          size="small"
          onClick={() => navigate(`/character/${id}`)}
        >
          Learn More
        </Button>
        <Button
          fullWidth
          variant="outlined"
          size="small"
          /*Consume el estado del boton*/
          disabled={disableBtn}
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};
