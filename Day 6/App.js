import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Register } from './component/register';
import { Login } from './component/login';
import Contact from './component/contact';
import About from './component/about';
import Home from './component/home';
import Privacy from './component/privacy';
import Profile from './component/profile';
import {UpdatePro} from './component/update';
import Resource from './component/resource';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/update' element={<UpdatePro/>}/>
        <Route path='/resource' element={<Resource/>}/>
      </Routes>
      </Router>
  );
}

export default App;