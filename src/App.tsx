import "./scss/components/news.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthBar from "./components/AuthBar";

const App = () => {
	return (
		<Router>
			<div className="App">
				<AuthBar />
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
