 


import Main from './pages/Main';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Contact from './pages/Contact';
//import Chart from './pages/Chart';
import ChartTicker from './pages/ChartTicker';
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import EventEdit from './pages/EventEdit';


 

 
 
import {
  BrowserRouter as Router,
 // Switch,
  Route,
  Routes,
//  Link
} from "react-router-dom";


import './App.css';
 

//const root = ReactDOM.createRoot(mountNode);

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dashboard" element={<Dashboard />} />



              <Route path="/events/:ticker/:url" element={<Events />} />
              <Route path="/events/edit/:ticker/:url" element={<EventEdit />} />
              
              <Route path="/crypto/:ticker" element={<ChartTicker />} />
              
              <Route path="*" element={<NotFound />} />
              
          </Routes>
      </Router>
    </div>
  );
}

export default App;
