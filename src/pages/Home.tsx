import "../scss/pages/home.scss";
import { Link } from "react-router-dom";
import { Product } from "../interfaces/api";
import spotlightImage from "../assets/images/spotlight.jpg";
import Carousel from "../components/Carousel";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

const Home = () => {
	const [menProducts, menProductsLoading, menProductsError] = useFetch(
		"http://localhost:3000/categories/men/products?type=slug"
	);

	const [womenProducts, womenProductsLoading, womenProductsError] = useFetch(
		"http://localhost:3000/categories/women/products?type=slug"
	);

	return (
		<>
			<section className="news">
				<p className="news__item">Sign in to the newsletter and don't miss best offers!</p>
				<Link to="/newsletter" className="news__button">
					Sign in
				</Link>
			</section>
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
					<Carousel products={(menProducts ? menProducts.data : []) as Product[]} />
				</section>
				<section className="home__section">
					<h2 className="home__section-title">New products for Woman</h2>
					<Carousel products={(womenProducts ? womenProducts.data : []) as Product[]} />
				</section>
			</div>
		</>
	);
};

export default Home;
