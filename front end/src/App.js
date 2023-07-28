import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Elogin from './component/Elogin';
import Ahome from './component/Ahome';
import EContact from './component/Econtact';
import Main from './component/main';
import Alogin from './component/Alogin';
import Ehome from './component/Ehome';
import ERegister from './component/Eregister';
import ARegister from './component/Aregister';
import AProfile from './component/Aprofile';
import EProfile from './component/Eprofile';
import ATask from './component/Atask';
import FeedBack from './component/feedback';
import AContact from './component/acontact';
import Aemployees from './component/Aresource';
import Eresource from './component/Eresource';
import Aproject from './component/Aproject';
import RiskGet from './component/Arisk';
import Etask from './component/Etask';
import ProGet from './component/Eproject';
import ERisk from './component/Erisk';
import EPrivacy from './component/Eprivacy';
import AAbout from './component/Aabout';
import EAbout from './component/Eabout';
import APrivacy from './component/Aprivacy';
function App() {
  return (

    <Routes>
      <Route path='/' element={<Main />} />
      <Route path="/Eregister" element={<ERegister/>} />
      <Route path="/Aregister" element={<ARegister/>} />
      <Route path="/Alogin" element={<Alogin />} />
      <Route path="/Elogin" element={<Elogin />} />
      <Route path='/Ahome' element={<Ahome />} />
      <Route path='/Ehome' element={<Ehome />} />
      <Route path='/Aabout' element={<AAbout />} />
      <Route path='/Eabout' element={<EAbout />} />
      <Route path='/Acontact' element={<AContact />} />
      <Route path='/Econtact' element={<EContact />} />
      <Route path='/Eprivacy' element={<EPrivacy />} />
      <Route path='/Aprivacy' element={<APrivacy />} />
      <Route path='/Eproject' element={<ProGet/>}/>
      <Route path='/Aproject' element={<Aproject/>}/>
      <Route path='/Aresource' element={< Aemployees/>}/>
      <Route path='/Eresource' element={<Eresource/>}/>
      <Route path='/Aprofile' element={<AProfile/>}/>
      <Route path='/Eprofile' element={<EProfile/>}/>
      <Route path='/Arisk' element={<RiskGet/>}/>
      <Route path='/Erisk' element={<ERisk/>}/>
      <Route path='/Atask' element={<ATask/>}/>
      <Route path='/Etask' element={<Etask/>}/>
      <Route path='/feedback' element={<FeedBack/>}/>
      </Routes>

  );
}

export default App;