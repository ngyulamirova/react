import './App.css';
import { Header } from './components/Header/Header';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<div className='app-container'>
			<Header hasNoButton={true} />
			<Outlet />
		</div>
	);
}

export default App;
