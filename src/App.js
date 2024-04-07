import { Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route  path='/home' element={<Home/> }/>
        <Route  path='/about' element={<About /> }/>
        <Route  path='/contact' element={<Contact/> }/>
        <Route path="*" element={<NotFound/> } />
      </Routes>
    </div>
  );
}

export default App;
