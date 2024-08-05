import CreateEditForm from './components/CreateEditForm';
import DeleteUser from './components/DeleteUser';
import Footer from './components/Footer';
import Header from './components/Header';
import UserDetails from './components/UserDetails';
import UserList from './components/UserList';
import './styles.css';  //can be imported in main.jsx as well
 
function App() {

	return (
		<div>
			<Header />

			<main className="main">	
				<UserList />

				{/* <UserDetails /> */}

				{/* <CreateEditForm /> */}

				{/* <DeleteUser /> */}

			</main>

			<Footer />
		</div>
	);
}

export default App
