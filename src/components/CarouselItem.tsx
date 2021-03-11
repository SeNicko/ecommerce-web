import "../scss/components/carouselItem.scss";
import { FunctionComponent } from "react";

interface CarouselItemProps {
	active: boolean;
}

const CarouselItem: FunctionComponent<CarouselItemProps> = ({ children, active }) => {
	return (
		<div className={`carousel-item ${active ? "carousel-item--deactivated" : ""}`}>
			{children}
		</div>
	);
};

export default CarouselItem;
