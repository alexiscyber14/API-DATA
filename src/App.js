import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './conponents/Home';
import Details from './conponents/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:companyName" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
