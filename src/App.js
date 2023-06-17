 

import { Route, Routes } from 'react-router';
import Myfooter from './component/Myfooter';
import Mynav from './component/Mynav.jsx'
 import Home from '../src/pages/home'
 import Login from '../src/pages/login'
import Students from './pages/Students';
import ProductsDet from './component/ProductsDet';
 
function App(){
    return(
        <> 
 
        <Mynav/>
      <Routes>
        <Route path='/' element = { <Home/>}></Route>
        <Route path='/login' element = {<Login/>}></Route>
        <Route path='/store/:id' element = {<ProductsDet/>}></Route>
        <Route path='/students' element = {<Students/>}></Route>
        <Route path='*' element = {<div className='d-flex justify-content-center   '> not Found 404 erorr</div>}></Route>
      </Routes>
        <Myfooter/>
        
        </>
   
    );
}
export default App;