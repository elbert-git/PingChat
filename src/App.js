import AuthProvider from './authContext';
import MainRoot from './MainRoot';
 
function App() {
	return (
		<div className="App">
			<AuthProvider>
				<MainRoot className="div--mainroot"/>
			</AuthProvider>
		</div>
	);
}

export default App;
