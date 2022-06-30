import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayAll from './components/DisplayAll';
import UpdateOne from './components/UpdateOne';
import Form from './components/Form';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Favorite authors</h1>
          </div>
          <div>
            <Link to={`/new-author`}><button>Add an author</button></Link>
            <Link to={`/`}><button>Back To Home</button></Link>
          </div>
        </header>
        <div className="App-body">
          <Routes>
            <Route path='/' element={<DisplayAll />} />
            <Route path='/new-author' element={<Form />} />
            <Route path='/author/edit/:id' element={<UpdateOne />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
