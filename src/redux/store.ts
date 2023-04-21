//TODO: debemos usar este codigo para el store
import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './slices'


export const store = configureStore({
    //TODO: aca en el reducer debemos definir los reducers que definimos
    reducer: {
        cartReducer:cartSlice.reducer
    },
})
//TODO: esto lo dbemos hacer para poder usar typescript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch