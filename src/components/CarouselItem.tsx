import "../scss/components/carouselItem.scss";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Product } from "../interfaces/api";

interface CarouselItemProps {
	product: Product;
}

const CarouselItem: FunctionComponent<CarouselItemProps> = ({
	product: { images, slug, name, description, price }
}) => {
	return (
		<figure className="carousel-item">
			<Link to={`/product/${slug}`}>
				<img src={images[0].url} alt="" className="carousel-item__image" />
				<div className="carousel-item__info">
					<figcaption className="carousel-item__name">{name}</figcaption>
					<p className="carousel-item__description">{description}</p>
					<span className="carousel-item__price">${price}</span>
				</div>
			</Link>
		</figure>
	);
};

export default CarouselItem;
