import { Routes, Route } from 'react-router-dom';

import './App.scss';

import Header from './components/header/header.component';
import Home from './routes/home/home.component';
import ShopPage from './routes/shop/shop.component';



const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/shop' element={<ShopPage />}/>
      </Routes>
    </div>
  );
}

export default App;
