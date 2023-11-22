import './App.css';
import { Header } from './components/Header/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
	const navigate = useNavigate();
	const [token, setToken] = useState('');
	const [name, setName] = useState('');

	useEffect(() => {
		setToken(localStorage.getItem('token'));
		setName(localStorage.getItem('name'));
		navigate(token ? '/courses' : '/login', { replace: true });
	}, []);

	const logout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('name');
		setToken('');
		setName('');
		navigate('/login', { replace: true });
	};

	return (
		<div className='app-container'>
			<Header buttonText={token ? 'LOGOUT' : ''} onClick={logout} name={name} />
			<Outlet />
		</div>
	);
}

export default App;
