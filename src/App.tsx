import './App.css';
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from './Router';
import { NotificationProvider } from './context/notification.context';

function App() {
  return (
    <NotificationProvider>
      {/* usamos el BrowserRouter y dentro definimos nuestro router para poder
      redireccionar entre componentes */}
      <BrowserRouter>
        {/* El AppRouter lo definimos como archivo Router.tsx que maneja las rutas de nuestra app */}
        <AppRouter />
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;
