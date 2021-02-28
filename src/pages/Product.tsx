import "../scss/pages/product.scss";
import { FunctionComponent, useMemo } from "react";
import useFetch from "../hooks/useFetch";
import { apiUri } from "../config/api";
import { useParams } from "react-router-dom";
import { IProduct } from "../interfaces/api";
import Carousel from "../components/Carousel";

interface ProductPageParams {
	productSlug: string;
}

const Product: FunctionComponent = () => {
	const { productSlug } = useParams<ProductPageParams>();
	const [data, isLoading, error] = useFetch<IProduct>(
		`${apiUri}/products/${productSlug}?type=slug`
	);
	const productImages = useMemo(() => data?.images.slice(1), [data]);

	return (
		<div className="product-wrapper">
			{error && <p>Are you looking for an existing product?</p>}
			{isLoading && <p>Page is loading...</p>}
			{data && (
				<>
					<section className="product-gallery">
						{productImages &&
							productImages.map(({ url }, i) => (
								<img className="product-gallery__item" src={url} alt="" key={i} />
							))}
					</section>
					<section className="product-details">
						<header className="product-details__header">
							<section className="product-details__meta">
								<p className="product-details__description">{data.description}</p>
								<span className="product-details__price">${data.price}</span>
							</section>
							<h1 className="product-details__name">{data.name}</h1>
						</header>
						<section className="product-details__actions">
							<button className="product-details__actions-button product-details__actions-button--primary">
								Add to bag
							</button>
							<button className="product-details__actions-button">
								Add to favourites
							</button>
						</section>
					</section>
				</>
			)}
		</div>
	);
};

export default Product;
