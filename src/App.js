import logo from './logo.svg';
import './App.css';
import Views from './components/Views';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import Delete from './components/Delete';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Add/>} />
      <Route path='/delete' element={<Delete/>} />
      <Route path='/search' element={<Search/>} />
      <Route path='/view' element={<Views/>} />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
