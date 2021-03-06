import { Routes, Route } from 'react-router-dom';

import './App.scss';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import ShopPage from './routes/shop/shop.component';
import Authentication from './routes/authentication/authentication.component';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home />}/>
          <Route path='shop' element={<ShopPage />}/>
          <Route path='auth' element={<Authentication />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
