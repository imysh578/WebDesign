import './App.css';
import { Home } from './components/home/Home';
import { Navbar } from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './components/home/dashboard/Dashboard';

function App() {
  return (
		<>
			<Navbar />
			<Home>
				<Routes>
					<Route path="/">
						<Route index element={<Dashboard />} />
						<Route path="dashboard" element={<Dashboard />} />
					</Route>
				</Routes>
			</Home>
		</>
	);
}

export default App;