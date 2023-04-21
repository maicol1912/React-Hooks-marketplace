import React from "react"
//TODO: exportamos las paginas desde aca par poder importar las paginas con lazy load desde otros componentes
export {HomePage} from "./home"

//TODO: exportamos una constante que seria el cargue lazy load de un componente, este debe estar exportado como default
export const LoginPage = React.lazy(()=> import('./login'))
export const CharacterPage = React.lazy(() => import('./character'))