import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import StockListing from "./StockListing"
import StockDetail from './StockDetail';
import StockEdit from './StockEdit';
import StockCreate from './StockCreate';
function App() {
  return (
    <div className="App">
      <h1>Stock Management App</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StockListing />}></Route>
          <Route path='/stock/create' element={<StockCreate />}></Route>
          <Route path='stock/detail/:stockid' element={<StockDetail />}></Route>
          <Route path='/stock/edit/:stockid' element={<StockEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
