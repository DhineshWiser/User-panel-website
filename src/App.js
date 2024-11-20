import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Watch from './Components/Watch';
import Shoes from './Components/Shoes';
import Bags from './Components/Bags';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Apidata from './Components/Apidata';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apidata/:id" element={<Apidata />} />
          <Route path='/watch' element={<Watch />} />
          <Route path='/shoes' element={<Shoes />} />
          <Route path='/bags' element={<Bags />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>

    </div>

  );
}

export default App;
