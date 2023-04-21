import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CartAddState {
    id: string | number;
    name: string;
    info: string;
    image: string;
}

interface CartRemoveState {
    id: string | number;
}
//TODO: definimos el initial state y lo inicializamos como una lista vacia
const initialState: CartAddState[] = []

//TODO: creamos un slice que es el que maneja los reducers
export const cartSlice = createSlice({
    //le damos un nombre al state
    name: 'cart',
    //todo: le enviamos el initial state
    initialState,
    //todo: definimos los reducers
    reducers: {
        //TODO: creamos un reducer que se llame addToCart
        //TODO: este recibe un state
        //TODO: este recibe un Payload de tipo de interface CartAddState
        addToCart: (state, action: PayloadAction<CartAddState>) => {
            //TODO: tomamos un id del payload
            const { id } = action.payload
            //TODO: si el estado es 0 o no existe el id en el item lo agregara a la lista
            if (state.length === 0 || state.filter((item) => item.id === id).length === 0) {
                state.push(action.payload)
            }
        },
        //TODO: creamos un reducer que se llame removeCart
        //TODO: este recibe un state
        //TODO: este recibe un Payload de tipo de interface CartRemove que es un id
        removeToCart: (state, action: PayloadAction<CartRemoveState>) => {
            const { id } = action.payload
            //TODO: si existe un item con ese id entra
            if (state.some((item) => item.id === id)) {
                //TODO: retornamos un state que filtre la lista pero ahora sin ese id
                return state = state.filter((item) => item.id !== id)

            }
        }
    }
},
)
//TODO: exportamos el reducer para poderlo usar desde otros lugares
export const { addToCart, removeToCart } = cartSlice.actions

