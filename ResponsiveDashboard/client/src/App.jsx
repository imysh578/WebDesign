import './App.css';
import { Dashboard } from './components/dashboard/Dashboard';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
