import React from "react";
import { Routes,Route } from "react-router-dom";
import { RouterLayout } from './common/RouterLayout';
//TODO: lo importamos desde el archivo de index que exporta todas las pages para poder hacer lazylaod
//TODO: en este caso LoginPage y CharacterPage son lazyLoad
import { HomePage, LoginPage, CharacterPage } from './pages';

//El react.FC se usa para definir que eso es un componente de react para podr ser usado desde otros lugares
export const AppRouter:React.FC<{}> = ()=>{
    return (
      /* definimos una routes y dentro de esta iran las demas rutas y hacia que componente redirecciona cada una de ellas*/
      <Routes>
        {/*Lo que se esta realizando es dentro de la ruta de layout meter todos los demas componentes, lo que se busca es que
            El layout va a poner siempre el navBar arriba y el demas componente abajo como definimos en el rputerLayout*/}
        <Route path="/" element={<RouterLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/character/:id" element={<CharacterPage />} />
        </Route>

        {/*si lo hacemos de esta manera estamos excluyendo la ruta del Layout por lo tanto no tendra ningun otro elemento
            superpuesto encima de el */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    );
}