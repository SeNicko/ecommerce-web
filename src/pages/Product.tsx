import "../scss/pages/product.scss";
import { FunctionComponent, useMemo } from "react";
import useFetch from "../hooks/useFetch";
import { apiUri } from "../config/api";
import { useParams } from "react-router-dom";
import { IProduct } from "../interfaces/api";

interface ProductPageParams {
	productSlug: string;
}

const Product: FunctionComponent = () => {
	const { productSlug } = useParams<ProductPageParams>();
	const [data, isLoading, error] = useFetch<IProduct>(
		`${apiUri}/products/${productSlug}?type=slug`
	);
	const productImages = useMemo(() => data?.images.slice(1), [data]);

	if (error) {
		return <p>Are you looking for an existing product?</p>;
	} else if (isLoading) {
		return <p>Page is loading</p>;
	} else {
		return (
			data && (
				<div className="product-wrapper">
					<section className="product-gallery">
						{productImages &&
							productImages.map(({ url }, i) => (
								<img className="product-gallery__item" src={url} alt="" key={i} />
							))}
					</section>
					<section className="product-details">
						<header className="product-details-header">
							<section className="product-details-meta">
								<p className="product-details-meta__description">
									{data.description}
								</p>
								<span className="product-details-meta__price">${data.price}</span>
							</section>
							<h1 className="product-details-header__name">{data.name}</h1>
						</header>
						<section className="product-details-actions">
							<button className="product-details-actions__button product-details-actions__button--primary">
								Add to bag
							</button>
							<button className="product-details-actions__button">
								Add to favourites
							</button>
						</section>
					</section>
				</div>
			)
		);
	}
};

export default Product;
