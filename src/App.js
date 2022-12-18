 


import Main from './pages/Main';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Contact from './pages/Contact';
//import Chart from './pages/Chart';
import ChartTicker from './pages/ChartTicker';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

 
import Events from './pages/Events'; 
import EventEdit from './pages/event/EventEdit';
import EventEditComplete from './pages/event/EventEditComplete';
import InspectEventShow from './pages/inspect/EventShow';
import ListInspect from './pages/inspect/ListInspect';
  
import {
  BrowserRouter as Router,
 // Switch,
  Route,
  Routes,
//  Link
} from "react-router-dom";


import './App.css';
 
// export const RoutesData = [
//   { key: "index", path: "/", element: <Main /> },
//   { key: "about", path: "/about", element: <About /> },
//   { key: "contact", path: "/contact", element: <Contact /> },
//   { key: "dashboard", path: "/dashboard", element: <Dashboard /> },
//   { key: "inspect", path: "/inspects", element: <ListInspect /> },
//   { key: "inspect", path: "/inspect/:hash", element: <InspectEventShow /> },
//   { key: "events", path: "/events/:ticker/:url", element: <Events /> },
//   { key: "events", path: "/events/new/:ticker/", element: <EventEdit /> },
//   { key: "events", path: "/events/edit/:ticker/:url", element: <EventEdit /> },
//   {
//     key: "events",
//     path: "/checkevent/edit/:ticker/:url",
//     element: <EventEdit />,
//   },
//   {
//     key: "events",
//     path: "/checkevent/:ticker/:hash",
//     element: <EventEditComplete />,
//   },
//   { key: "profile", path: "/profile", element: <Profile /> },
//   { key: "events", path: "/crypto/:ticker", element: <ChartTicker /> },
//   { key: "notFound", path: "*", element: <NotFound /> },
// ];
//const root = ReactDOM.createRoot(mountNode);

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route basename='index' path="/" element={<Main />} />
              <Route basename='about' path="/about" element={<About/>} />
              <Route basename='contact' path="/contact" element={<Contact />} />
              <Route basename='dashboard' path="/dashboard" element={<Dashboard />} /> 
              <Route basename='inspect' path="/inspects" element={<ListInspect/>} />
              <Route basename='inspect' path="/inspect/:hash" element={<InspectEventShow />} /> 
              <Route basename='events' path="/events/:ticker/:url" element={<Events />} />
              <Route basename='events' path="/events/new/:ticker/" element={<EventEdit />} />
              <Route basename='events' path="/events/edit/:ticker/:url" element={<EventEdit />} />
              <Route basename='events' path="/checkevent/edit/:ticker/:url" element={<EventEdit />} />
              <Route basename='events' path="/checkevent/:ticker/:hash" element={<EventEditComplete />} />
              <Route basename='profile' path="/profile" element={<Profile />} />
              <Route basename='events' path="/crypto/:ticker" element={<ChartTicker />} />
              <Route  basename='notfound'  path="*" element={<NotFound />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
