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
type CardProps = {
    image:string;
    name:string;
    species:string;
    status:string;
    id:number;
}
export const CardComponent: React.FC<CardProps>= ({image,name,species,status,id}) => {
  const [disableBtn, setDisableBtn] = React.useState<boolean>(false)

  let navigate = useNavigate()

  const dispatch = useAppDispatch()

  const itemExist = useAppSelector((state)=>state.cartReducer)

  React.useEffect(()=>{
    itemExist.some((item) => item.id === id)
      ? setDisableBtn(true)
      : setDisableBtn(false);
    setItem('cart',itemExist)
  },/*se ejecutara cada que el itemExist o el id cambie o se cargue*/[itemExist,id])
  const handleAddToCart = ()=>{
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
