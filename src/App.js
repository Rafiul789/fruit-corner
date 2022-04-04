
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Reviews from './Components/Reviews/Reviews';

import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';
import Dashboard from './Components/Dashboard/Dashboard';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div >
<Navbar></Navbar>

     <Routes> <Route path='/' element={<Home></Home>}  > </Route>  <Route path='/reviews' element={<Reviews></Reviews>}  > </Route>   <Route path='/dashboard' element={<Dashboard></Dashboard>}  > </Route>   <Route path='/blogs' element={<Blogs></Blogs>}  > </Route>   <Route path='/about' element={<About></About>}  > </Route> <Route path='*' element={<NotFound></NotFound>} ></Route> </Routes>
    </div>
  );
}

export default App;
