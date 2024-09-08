import {Routes,  Route} from 'react-router-dom'
import { Home } from './Pages/Home';
import { Cart } from './Pages/Cart';
import { Success } from './Pages/Success';
import { DefaultLayout } from './components/layouts/DefaultLayout';
export function Router(){

    return(
        <Routes>
           <Route path='/' element={<DefaultLayout />}>
            <Route path='/' element={<Home/>} />
            <Route path='/checkout' element={<Cart/>} />
            <Route path='/success' element={<Success/>} />
           </Route>
        </Routes>
    );
}