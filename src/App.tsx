import './App.css';
import {Suspense} from "react"
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from './Router';
import { NotificationProvider } from './context/notification.context';

function App() {
  return (
    <NotificationProvider>
      {/* usamos el BrowserRouter y dentro definimos nuestro router para poder
      redireccionar entre componentes */}
      <BrowserRouter>
      {/*Se usa para cuando una pagina redirige a otra lo haga, mientras espera envia ese mensaje*/}
        <Suspense fallback={'Cargando...'}>
          {/* El AppRouter lo definimos como archivo Router.tsx que maneja las rutas de nuestra app */}
          <AppRouter />
        </Suspense>
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;
