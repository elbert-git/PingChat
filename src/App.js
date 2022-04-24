import AuthProvider from './authContext';
import MainRoot from './MainRoot';
 
function App() {
	return (
		<div className="App div--fillScreenHeight debug--red">
			<AuthProvider>
				<MainRoot/>
			</AuthProvider>
		</div>
	);
}

export default App;
