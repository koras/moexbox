 


import Main from './pages/Main';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Contact from './pages/Contact';
import Chart from './pages/Chart';
import Events from './pages/Events';
//import { Provider } from 'react-redux';
import store from './store';
import {Provider} from "mobx-react";
// https://habr.com/ru/post/471048/
 

 
 
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
   <Provider store={store}> 
      <Router>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/chart" element={<Chart />} />
              <Route path="/events/:ticker/:url" element={<Events />} />
              
              <Route path="*" element={<NotFound />} />
              
          </Routes>
      </Router>
    </Provider>
    </div>
  );
}

export default App;
