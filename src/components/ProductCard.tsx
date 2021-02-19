import { FunctionComponent } from "react";
import { Product } from "../interfaces/api";
import { Link } from "react-router-dom";

interface ProductCardProps {
	product: Product;
}

const ProductCard: FunctionComponent<ProductCardProps> = ({
	product: { images, name, description, price, slug }
}) => {
	return (
		<Link to={`/product/${slug}`}>
			<figure className="product-card">
				<img src={images[0].url} alt={images[0].alt} className="product-card__image" />
				<div className="product-card__info">
					<figcaption className="product-card__name">{name}</figcaption>
					<p className="product-card__description">{description}</p>
					<span className="product-card__price">${price}</span>
				</div>
			</figure>
		</Link>
	);
};

export default ProductCard;
