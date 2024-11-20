import {
	LoginPage,
	BooksPage,
	DashboardPage,
	StudentPage,
	LoanPage,
	HistoryPage,
	DeletedPage,
	DeletedBooksPage,
} from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const RoutesNav = () => {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<LoginPage />}
				></Route>
				<Route
					path='/books'
					element={<BooksPage />}
				></Route>
				<Route
					path='/dashboard'
					element={<DashboardPage />}
				></Route>
				<Route
					path='/students'
					element={<StudentPage />}
				></Route>
				<Route
					path='/loan'
					element={<LoanPage />}
				></Route>
				<Route
					path='/history'
					element={<HistoryPage />}
				></Route>
				<Route
					path='/deleted'
					element={<DeletedPage />}
				></Route>
				<Route
					path='/deletedBooks'
					element={<DeletedBooksPage />}
				></Route>
			</Routes>
		</Router>
	);
};

export default RoutesNav;
