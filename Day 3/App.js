import { useState } from 'react';
import './App.css';
import { Login } from './component/login';
import { Register } from './component/register';

function App() 
{
  const [currentForm, setCurrentForm] = useState('login');

  const toggleform = (forName) => {
    setCurrentForm(forName);
  }
  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleform}/> : <Register onFormSwitch={toggleform}/>
      }
    </div>
  );
}
export default App;