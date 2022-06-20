import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayAll from './components/DisplayAll';
import DisplayOne from './components/DisplayOne';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Product Manager</h1>
          </div>
          <div>
            <Link to={``}><button>Go to Home Page</button></Link>
          </div>
        </header>
        <div className="App-body">
          <Routes>
            <Route path="/" element={<DisplayAll />} />
            <Route path="/product/:id" element={<DisplayOne />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
