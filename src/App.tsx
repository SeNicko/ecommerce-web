import "./scss/components/news.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<Router>
			<div className="App">
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
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/category/:categorySlug">
						<Category />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
