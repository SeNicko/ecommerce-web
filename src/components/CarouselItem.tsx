import "../scss/components/carouselItem.scss";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../interfaces/api";

interface CarouselItemProps {
	product: IProduct;
	active: boolean;
}

const CarouselItem: FunctionComponent<CarouselItemProps> = ({
	product: { images, slug, name, description, price },
	active
}) => {
	return (
		<figure className={`carousel-item ${active ? "carousel-item--deactivated" : ""}`}>
			<Link to={`/product/${slug}`} draggable="false">
				<img
					src={images[0].url}
					alt=""
					className="carousel-item__image"
					draggable="false"
				/>
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
