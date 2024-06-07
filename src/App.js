import logo from './logo.svg';
import './App.css';
import AddBook from './component/AddBook';
import DeleteBokk from './component/DeleteBokk';
import SearchBook from './component/SearchBook';
import ViewAllBook from './component/ViewAllBook';
import NavBar from './component/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/
      y' element={<AddBook/>} />
      <Route path='/Search' element={<SearchBook/>} />
      <Route path='/Delete' element={<DeleteBokk/>} />
      <Route path='/View' element={<ViewAllBook/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
