

import { Route, Routes } from 'react-router';
import Myfooter from './component/Myfooter';
import Mynav from './component/Mynav.jsx'
import Home from './pages/home'
import Login from './pages/login'
import Students from './pages/Students';
import ProductsDet from './component/ProductsDet';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setProducts } from './Redux/Slices/productsSlice';
 import Cart from './component/Cart'
import { getProducts } from './API/Prodects';
import Store from './component/store';

function App() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const data = await getProducts();
      dispatch(setProducts(data));
    })();
  }, [dispatch]);

  return (
    <>

      <Mynav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/store' element={<Store />}></Route>
        <Route path='/store/:id' element={<ProductsDet />}></Route>
        <Route path='/students' element={<Students />}></Route>
        <Route path='*' element={<div className='d-flex justify-content-center'> not Found 404 erorr</div>}></Route>
      </Routes>
      <Myfooter />
 
    </>

  );
}
export default App;