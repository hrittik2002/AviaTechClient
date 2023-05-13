import './App.css';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import HomePage from './page/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/home' element={<div>home</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
