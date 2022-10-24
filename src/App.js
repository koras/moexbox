 


import Main from './pages/Main';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Contact from './pages/Contact';
 
 
import {
  BrowserRouter as Router,
 // Switch,
  Route,
  Routes,
//  Link
} from "react-router-dom";


import './App.css';

function App() {
  return (
    <div className="App">
  
      <Router>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
