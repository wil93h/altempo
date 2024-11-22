import { Suspense } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter, Route } from 'react-router-dom'
import { PublicRoutes } from './models/routes'
import { useTranslation } from 'react-i18next'
import { lazy } from 'react'
import RouterWithNotFound from './components/RouterWithNotFound'


const Register = lazy(() => import('./page/Register/Register'));

function App() {
  const { t } = useTranslation();
  const routes = {
    LOGIN: t('login'),
    REGISTER: t('register'),
  };
  return (
   <Suspense fallback={<>Cargando...</>}>
    <Provider store={store}>
      <BrowserRouter>
        <RouterWithNotFound>
          <Route path="/" element={<Register/>} />
        </RouterWithNotFound>
      </BrowserRouter>
    </Provider>
   </Suspense>
  )
}

export default App
