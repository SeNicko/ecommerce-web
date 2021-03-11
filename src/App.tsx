import "./scss/components/news.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useContext } from "react";
import { UserContext } from "./context/userContext";
import { getRefreshToken } from "./util/auth";

const App = () => {
	const { logged, userEmail, setLogged, setUserEmail, setAccessToken } = useContext(UserContext);

	// Refactor this later
	const checkIfIsLogged = async () => {
		// Get refresh token
		const data = await getRefreshToken();

		if (data.error) {
			// Handle error
		} else {
			// Set logged in state
			setLogged!(true);
			// Set user email
			setUserEmail!(data.userEmail);
			// Set access token for api calls
			setAccessToken!(data.accessToken);
		}
	};

	// Allow to logout
	const logout = async () => {
		// Remove cookie by accessing api
		fetch("http://localhost:3000/users/logout", {
			method: "POST",
			credentials: "include"
		});

		// Clear user from state
		setLogged!(false);
		setUserEmail!(null);
		setAccessToken!(null);
	};

	// Check if user is logged (If there is a cookie with valid refresh token)
	checkIfIsLogged();

	return (
		<Router>
			<div className="App">
				<section className="auth-status">
					{logged ? (
						<>
							<span>{userEmail}</span>
							<span className="auth-status__spacer">|</span>
							<button className="auth-status__logout" onClick={logout}>
								log out
							</button>
						</>
					) : (
						<>
							<Link className="auth-status__link" to="/register">
								register
							</Link>
							<span className="auth-status__spacer">|</span>
							<Link className="auth-status__link" to="/login">
								login
							</Link>
						</>
					)}
				</section>
				<Navbar />
				<section className="news">
					<p className="news__item">
						Sign in to the newsletter and don't miss best offers!
					</p>
					<Link to="/newsletter" className="news__button">
						Sign in
					</Link>
				</section>
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/category/:categorySlug" component={Category} exact />
					<Route path="/product/:productSlug" component={Product} exact />
					<Route path="/login" component={Login} exact />
					<Route path="/register" component={Register} exact />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
