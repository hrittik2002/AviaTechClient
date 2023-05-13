import './App.css';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import HomePage from './page/HomePage/HomePage';
import Fabrication from './page/Fabrication/Fabrication';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/home' element={<div>home</div>} />
        <Route path='/fab' element={<Fabrication/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
