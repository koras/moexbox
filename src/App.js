 


import Main from './pages/Main';
import NotFound from './pages/NotFound';

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
            <Route path="/about" element={<h2>About</h2>} />
            <Route path="/contact" element={(<h2>Contacts</h2>)} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
