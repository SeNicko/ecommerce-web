import "../scss/pages/home.scss";
import { Link } from "react-router-dom";
import { IProduct, IResourceRequest } from "../interfaces/api";
import spotlightImage from "../assets/images/spotlight.jpg";
import Carousel from "../components/Carousel";
import useFetch from "../hooks/useFetch";
import { apiUri } from "../config/api";

const Home = () => {
	const [menProducts, menProductsLoading, menProductsError] = useFetch<
		IResourceRequest<IProduct>
	>(`${apiUri}/categories/men/products?type=slug`);

	const [womenProducts, womenProductsLoading, womenProductsError] = useFetch<
		IResourceRequest<IProduct>
	>(`${apiUri}/categories/women/products?type=slug`);

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
				<Carousel products={menProducts?.data ?? ([] as IProduct[])} />
			</section>
			<section className="home__section">
				<h2 className="home__section-title">New products for Women</h2>
				<Carousel products={womenProducts?.data ?? ([] as IProduct[])} />
			</section>
		</div>
	);
};

export default Home;
