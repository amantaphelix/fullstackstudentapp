import { Route, Routes } from 'react-router-dom';
import './App.css';
import Stable from './components/Stable';
import Addd from './components/Addd';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/Stable' element={<Stable />} />
        <Route path='/Addd' element={<Addd />} />
      </Routes>
    </div>
  );
}

export default App;
