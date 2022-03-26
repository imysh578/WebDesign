import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from './components/dashboard/Dashboard';
import { Dashcontent } from './components/dashboard/dashcontent/Dashcontent';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Dashboard>
        <Routes>
          <Route path='/'>
            <Route index element={<Dashcontent/>}/>
            <Route path='dashboard' element={<Dashcontent/>}/>
          </Route>
        </Routes>
      </Dashboard>
    </div>
  );
}

export default App;