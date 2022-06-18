import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductForm from './components/ProductForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Product Manager</h1>
        </header>
        <div className="App-body">
          <Routes>
            <Route path="/" element={<ProductForm />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
