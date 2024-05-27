
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './Components/Shop';
import Combos from './Components/Combos';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Router>
          <Routes>

            <Route path="/" element={<Shop />} />
            <Route path="/combos" element={<Combos />} />
            
          </Routes>
        </Router>
      </Navbar>
    </div>
  );
}

export default App;
