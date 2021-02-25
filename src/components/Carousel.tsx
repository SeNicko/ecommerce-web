import "../scss/components/carousel.scss";
import { FunctionComponent, useRef, useState, MouseEvent } from "react";
import { Product } from "../interfaces/api";
import CarouselItem from "./CarouselItem";

import { ReactComponent as LeftArrow } from "../assets/icons/chevron-left.svg";
import { ReactComponent as RightArrow } from "../assets/icons/chevron-right.svg";

interface CarouselProps {
	products: Product[];
}

const Carousel: FunctionComponent<CarouselProps> = ({ products }) => {
	const carousel = useRef<HTMLDivElement>(null);
	const [isAbleToDrag, setIsAbleToDrag] = useState(false);
	const [isDragging, setIsDragging] = useState(false);
	const [dragX, setDragX] = useState(0);

	const handleControlClick = (direction: boolean) => {
		if (carousel.current) {
			// Width of card + grid gap
			const amount = carousel.current.children[0].clientWidth + 20;

			for (let i = 0; i < 100; i++) {
				const step = (direction ? amount : -amount) / 100;

				setTimeout(() => {
					carousel.current?.scrollBy(step, 0);
				}, 2 * i);
			}
		}
	};

	const toggleDragScroll = (e: MouseEvent) => {
		setIsAbleToDrag(!isAbleToDrag);
		setIsDragging(false);
		setDragX(e.clientX);
	};

	const handleDragScroll = (e: MouseEvent) => {
		if (isAbleToDrag && carousel.current && e.clientX !== dragX) {
			carousel.current?.scrollBy(dragX - e.clientX, 0);
			setDragX(e.clientX);
			setIsDragging(true);
		}
	};

	return (
		<section className="carousel">
			{products && products.length !== 0 && (
				<div className="carousel__overlay">
					<button className="carousel__control" onClick={() => handleControlClick(false)}>
						<LeftArrow width="15" height="15" className="carousel__control-icon" />
					</button>
					<button className="carousel__control" onClick={() => handleControlClick(true)}>
						<RightArrow width="15" height="15" className="carousel__control-icon" />
					</button>
				</div>
			)}
			<div
				className="carousel__scroll"
				ref={carousel}
				onMouseDown={toggleDragScroll}
				onMouseUp={toggleDragScroll}
				onMouseMove={handleDragScroll}
				onMouseEnter={() => {
					setIsAbleToDrag(false);
					setIsDragging(false);
				}}
				onMouseLeave={() => {
					setIsAbleToDrag(false);
					setIsDragging(false);
				}}
			>
				{products &&
					products.map((product, i) => (
						<CarouselItem product={product} key={i} active={isDragging} />
					))}
			</div>
		</section>
	);
};

export default Carousel;
