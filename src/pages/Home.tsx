import "../scss/pages/home.scss";
import { Link } from "react-router-dom";
import { Product, ResourceRequest } from "../interfaces/api";
import spotlightImage from "../assets/images/spotlight.jpg";
import Carousel from "../components/Carousel";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

const Home = () => {
	const [menProducts, menProductsLoading, menProductsError] = useFetch<ResourceRequest<Product>>(
		"http://localhost:3000/categories/men/products?type=slug"
	);

	const [womenProducts, womenProductsLoading, womenProductsError] = useFetch<
		ResourceRequest<Product>
	>("http://localhost:3000/categories/women/products?type=slug");

	useEffect(() => {
		console.log(menProducts);
	}, []);

	return (
		<div className="home">
			<section className="home__section">
				<div className="spotlight">
					<img src={spotlightImage} alt="" className="spotlight__background" />
					<div className="spotlight__description">
						<p className="spotlight__hint">New</p>
						<h1 className="spotlight__title">SPRING COLLECTION</h1>
						<Link to="/spring-collection" className="spotlight__button">
							See more
						</Link>
					</div>
				</div>
			</section>
			<section className="home__section">
				<h2 className="home__section-title">New products for Men</h2>
				<Carousel products={menProducts?.data ?? ([] as Product[])} />
			</section>
			<section className="home__section">
				<h2 className="home__section-title">New products for Women</h2>
				<Carousel products={womenProducts?.data ?? ([] as Product[])} />
			</section>
		</div>
	);
};

export default Home;
