import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/home/Home';
import { Dashboard } from './components/home/dashboard/Dashboard';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home>
        <Routes>
          <Route path='/'>
            <Route index element={<Dashboard/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
          </Route>
        </Routes>
      </Home>
    </div>
  );
}

export default App;