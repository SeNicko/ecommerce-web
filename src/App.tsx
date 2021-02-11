import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Category } from "./interfaces/api";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const navData: Category[] = [
	{
		name: "Woman",
		slug: "woman",
		sub: [
			{
				name: "Boots",
				slug: "woman-boots",
				sub: null
			},
			{
				name: "Shirts",
				slug: "woman-shirts",
				sub: null
			},
			{
				name: "Jeans",
				slug: "woman-jeans",
				sub: null
			},
			{
				name: "T-shirts",
				slug: "woman-t-shirts",
				sub: null
			}
		]
	},
	{
		name: "Men",
		slug: "men",
		sub: [
			{
				name: "Boots",
				slug: "men-boots",
				sub: null
			}
		]
	},
	{
		name: "Children",
		slug: "children",
		sub: [
			{
				name: "Boots",
				slug: "children-boots",
				sub: null
			}
		]
	},
	{
		name: "Collections",
		slug: "collection",
		sub: [
			{
				name: "Winter collection",
				slug: "collection-winter",
				sub: null
			}
		]
	},
	{
		name: "Sale",
		slug: "sale",
		sub: null
	}
];

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar data={navData} />
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
