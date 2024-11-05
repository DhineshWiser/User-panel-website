import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Watch from './Components/Watch';
import Shoes from './Components/Shoes';
import Bags from './Components/Bags';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
           <Route path='/watch' element={<Watch/>}/>
           <Route path='/shoes' element={<Shoes/>}/>
           <Route path='/bags' element={<Bags/>}/>
        </Routes>
      </Router>

    </div>

  );
}

export default App;
