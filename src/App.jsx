import './App.css';
import RoutesNav from './RoutesNav';
import { DataProvider } from './DataContext';
function App() {
	return (
		<DataProvider>
			<RoutesNav />
		</DataProvider>
	);
}

export default App;
