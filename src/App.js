import './App.css';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import HomePage from './page/HomePage/HomePage';
import Fabrication from './page/Fabrication/Fabrication';
import SubAssembly from './page/SubAssembly/SubAssembly';
import Assembly from './page/Assembly/Assembly';
import Forcast from './page/Forcast/Forcast';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/sub' element={<SubAssembly/>} />
        <Route path='/fab' element={<Fabrication/>} />
        <Route path='/as' element={<Assembly/>} /> 
        <Route path='/forcast' element={<Forcast/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
