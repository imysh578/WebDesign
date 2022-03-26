import './App.css';
import { Main } from './components/main/Main';
import { Navbar } from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './components/main/dashboard/Dashboard';

function App() {
  return (
		<>
			<Navbar />
			<Main>
				<Routes>
					<Route path="/">
						<Route index element={<Dashboard />} />
						<Route path="dashboard" element={<Dashboard />} />
					</Route>
				</Routes>
			</Main>
		</>
	);
}

export default App;