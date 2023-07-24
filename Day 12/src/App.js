import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Elogin from './component/elogin';
import About from './component/about';
import Mhome from './component/mhome';
import Privacy from './component/privacy';
import Contact from './component/contact';
import Main from './component/main';
import Mlogin from './component/mlogin';
import Ehome from './component/ehome';
import ERegister from './component/eregister';
import MRegister from './component/mregister';

function App() {
  return (

    <Routes>
      <Route path='/' element={<Main />} />
      <Route path="/eregister" element={<ERegister/>} />
      <Route path="/mregister" element={<MRegister/>} />
      <Route path="/mlogin" element={<Mlogin />} />
      <Route path="/elogin" element={<Elogin />} />
      <Route path='/mhome' element={<Mhome />} />
      <Route path='/ehome' element={<Ehome />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/privacy' element={<Privacy />} />
    </Routes>

  );
}

export default App;