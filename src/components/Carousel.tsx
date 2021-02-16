import "../scss/carousel.scss";
import { FunctionComponent, useRef } from "react";
import { Product } from "../interfaces/api";
import CarouselItem from "./CarouselItem";

import { ReactComponent as LeftArrow } from "bootstrap-icons/icons/chevron-left.svg";
import { ReactComponent as RightArrow } from "bootstrap-icons/icons/chevron-right.svg";

interface CarouselProps {
	products: Product[];
}

const Carousel: FunctionComponent<CarouselProps> = ({ products }) => {
	const carousel = useRef<HTMLDivElement>(null);

	const handleControlClick = (direction: boolean) => {
		if (carousel.current) {
			// Width of card + grid gap
			const amount = carousel.current.children[0].clientWidth + 25;
			const offset = direction
				? carousel.current.scrollLeft + amount
				: carousel.current.scrollLeft - amount;

			carousel.current.scrollTo({
				left: offset,
				behavior: "smooth"
			});
		}
	};

	return (
		<section className="carousel">
			<div className="carousel__overlay">
				<span className="carousel__control" onClick={() => handleControlClick(false)}>
					<LeftArrow />
				</span>
				<span className="carousel__control" onClick={() => handleControlClick(true)}>
					<RightArrow />
				</span>
			</div>
			<div className="carousel__scroll" ref={carousel}>
				{products &&
					products.map((product, i) => <CarouselItem product={product} key={i} />)}
			</div>
		</section>
	);
};

export default Carousel;
