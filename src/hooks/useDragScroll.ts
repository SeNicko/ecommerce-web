import { useState, MouseEvent } from "react";

export const useDragScroll = (container: React.RefObject<HTMLDivElement>) => {
	// state
	const [isAbleToDrag, setIsAbleToDrag] = useState(false);
	const [isDragging, setIsDragging] = useState(false);
	const [dragX, setDragX] = useState(0);

	// Toggle ability to scroll with dragging (user pushed mouse button down but is not dragging it yet)
	const toggleDragScroll = (e: MouseEvent) => {
		setIsAbleToDrag(!isAbleToDrag);
		setIsDragging(false);
		setDragX(e.clientX);
	};

	// Handle scrolling with dragging
	const handleDragScroll = (e: MouseEvent) => {
		// Check if is able to drag, container exists and user moved it's mouse
		if (isAbleToDrag && container.current && e.clientX !== dragX) {
			container.current.scrollBy(dragX - e.clientX, 0);
			setDragX(e.clientX);
			setIsDragging(true);
		}
	};

	// Clear state variables
	const clearEvents = () => {
		setIsAbleToDrag(false);
		setIsDragging(false);
	};

	// Export data from hook
	return {
		isDragging,
		events: {
			onMouseDown: toggleDragScroll,
			onMouseUp: toggleDragScroll,
			onMouseMove: handleDragScroll,
			onMouseEnter: clearEvents,
			onMouseLeave: clearEvents
		}
	};
};
