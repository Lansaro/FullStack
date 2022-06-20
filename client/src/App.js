import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayAll from './components/DisplayAll';

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
            <Route path="/" element={<DisplayAll />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
