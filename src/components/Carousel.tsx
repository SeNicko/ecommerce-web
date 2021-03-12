import "../scss/components/carousel.scss";
import { FunctionComponent, useRef } from "react";
import { IProduct } from "../interfaces/api";
import CarouselItem from "./CarouselItem";

import { ReactComponent as LeftArrow } from "../assets/icons/chevron-left.svg";
import { ReactComponent as RightArrow } from "../assets/icons/chevron-right.svg";
import ProductCard from "./ProductCard";
import { useDragScroll } from "../hooks/useDragScroll";

interface CarouselProps {
	products: IProduct[];
}
const Carousel: FunctionComponent<CarouselProps> = ({ products, children }) => {
	const carousel = useRef<HTMLDivElement>(null);
	const { isDragging, events } = useDragScroll(carousel);

	const handleControlClick = (direction: boolean) => {
		if (carousel.current) {
			// Width of card + grid gap
			const amount = carousel.current.children[0].clientWidth;

			// Create scroll animation
			for (let i = 0; i < 100; i++) {
				// Calculate amount to scroll
				const step = (direction ? amount : -amount) / 100;

				// Run animation
				setTimeout(() => {
					carousel.current?.scrollBy(step, 0);
				}, 2 * i);
			}
		}
	};

	return (
		<section className="carousel">
			{products && products.length !== 0 && (
				<div className="carousel__overlay">
					<span className="carousel__control" onClick={() => handleControlClick(false)}>
						<LeftArrow width="15" height="15" className="carousel__control-icon" />
					</span>
					<span className="carousel__control" onClick={() => handleControlClick(true)}>
						<RightArrow width="15" height="15" className="carousel__control-icon" />
					</span>
				</div>
			)}
			<div ref={carousel} className="carousel__scroll" {...events}>
				{products &&
					products.map((product, i) => (
						<CarouselItem key={i} active={isDragging}>
							<ProductCard product={product} />
						</CarouselItem>
					))}
			</div>
		</section>
	);
};

export default Carousel;
