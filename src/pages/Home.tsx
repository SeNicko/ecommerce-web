import "../scss/home.scss";
import { Link } from "react-router-dom";
import { Product } from "../interfaces/api";
import spotlightImage from "../assets/spotlight.jpg";
import Carousel from "../components/Carousel";

const trends: Product[] = [
	{
		name: "Niko Sport Path",
		description: "Best shoes for runners",
		price: 34.99,
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/96b006c4-bc46-4a04-a48c-cc1039329d54/renew-run-womens-running-shoe-9CrB26.jpg",
		slug: "niko-sport"
	},
	{
		name: "Niko Ultra Boost",
		description: "Sport shoes for daily usage",
		price: 24.99,
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-shoe-62kcVV.jpg",
		slug: "niko-ultra-boost-2"
	},
	{
		name: "Niko Run Division",
		description: "Best t-shirt for runners",
		price: 29.99,
		imageUrl:
			"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_549,c_limit/cd422a8b-3a02-4e83-a91b-109bba478e62/koszulka-do-biegania-ze-specjalnie-zaprojektowanej-dzianiny-run-division-lVg6GM.jpg",
		slug: "niko-run-division"
	},
	{
		name: "Niko Sportswear Club Fleece",
		description: "Niko hoodie",
		price: 69.99,
		imageUrl:
			"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cj2wat4kkw2d7rdylcl1/bluza-z-kapturem-sportswear-club-fleece-39qLnk.jpg",
		slug: "niko-sports-wear-club-fleece"
	}
];

const offers: Product[] = [
	{
		name: "Niko Sport Path",
		description: "Best shoes for runners",
		price: 34.99,
		imageUrl:
			"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/96b006c4-bc46-4a04-a48c-cc1039329d54/renew-run-womens-running-shoe-9CrB26.jpg",
		slug: "niko-sport"
	},
	{
		name: "Niko Sportswear",
		description: "Cool jacket",
		price: 24.99,
		imageUrl:
			"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_586,c_limit/42f1662b-cc08-4eea-a48b-ef7dbda13675/parka-puchowa-sportswear-5MrwfJ.jpg",
		slug: "niko-ultra-boost-2"
	},
	{
		name: "Niko Run Division",
		description: "Best t-shirt for runners",
		price: 29.99,
		imageUrl:
			"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_549,c_limit/cd422a8b-3a02-4e83-a91b-109bba478e62/koszulka-do-biegania-ze-specjalnie-zaprojektowanej-dzianiny-run-division-lVg6GM.jpg",
		slug: "niko-run-division"
	},
	{
		name: "Niko Sportswear Club Fleece",
		description: "Niko hoodie",
		price: 69.99,
		imageUrl:
			"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cj2wat4kkw2d7rdylcl1/bluza-z-kapturem-sportswear-club-fleece-39qLnk.jpg",
		slug: "niko-sports-wear-club-fleece"
	},
	{
		name: "Niko Sportswear Backpack",
		description: "Amazing backpack for golfers",
		price: 69.99,
		imageUrl:
			"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_586,c_limit/hpstqngwyfb3elonstsf/torba-departure-roller-NPxd8z.jpg",
		slug: "niko-sports-wear-club-fleece"
	}
];

const Home = () => {
	return (
		<>
			<section className="news">
				<p className="news__item">Sign in to the newsletter and don't miss best offers!</p>
				<Link to="/newsletter" className="news__button button button--primary">
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
							<Link
								to="/spring-collection"
								className="main-section__button button button--primary"
							>
								See more
							</Link>
						</div>
					</div>
				</section>
				<section className="home__section">
					<h2 className="home__section-title">New products for Men</h2>
					<Carousel products={trends} />
				</section>
				<section className="home__section">
					<h2 className="home__section-title">New products for Woman</h2>
					<Carousel products={offers} />
				</section>
			</div>
		</>
	);
};

export default Home;
