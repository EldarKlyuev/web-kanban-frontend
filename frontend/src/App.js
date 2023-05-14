import './App.css';

import { Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { Registaration } from './components/Registaration';
import { Auth } from './components/Auth';


function App() {
  return (
    <Routes>
      
      <Route path="/" Component={About}></Route>
      <Route path='/reg' Component={Registaration}></Route>
      <Route path='/auth' Component={Auth}></Route>


        

    </Routes>
    
  );
}


export default App;
