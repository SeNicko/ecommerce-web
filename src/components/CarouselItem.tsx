import "../scss/carouselItem.scss";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Product } from "../interfaces/api";

interface CarouselItemProps {
	product: Product;
}

const CarouselItem: FunctionComponent<CarouselItemProps> = ({ product }) => {
	return (
		<Link to={`/product/${product.slug}`}>
			<figure className="carousel-item">
				<img src={product.imageUrl} alt="Product" className="carousel-item__image" />
				<div className="carousel-item__info">
					<figcaption className="carousel-item__name">{product.name}</figcaption>
					<p className="carousel-item__description">{product.description}</p>
					<span className="carousel-item__price">${product.price}</span>
				</div>
			</figure>
		</Link>
	);
};

export default CarouselItem;
