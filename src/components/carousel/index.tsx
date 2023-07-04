import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CarouselCtnProps {
	autoPlay?: boolean;
	infiniteLoop?: boolean;
	showThumbs?: boolean;
	thumbWidth?: number;
	renderThumbs?: (children: React.ReactChild[]) => React.ReactChild[];
	stopOnHover?: boolean;
	swipeable?: boolean;
	emulateTouch?: boolean;
	interval?: number;
	transitionTime?: number;
	centerSlidePercentage?: number;
	children: React.ReactChild[];
	ariaLabel?: string;
	showStatus?: boolean;
	showIndicators?: boolean;
	isFade?: boolean;
}

const CarouselCtn: React.FC<CarouselCtnProps> = ({
	autoPlay = true,
	infiniteLoop = true,
	showThumbs = false,
	thumbWidth,
	renderThumbs,
	stopOnHover = true,
	swipeable = true,
	emulateTouch = true,
	interval = 3000,
	transitionTime = 500,
	centerSlidePercentage = 100,
	children,
	ariaLabel = "Carousel Image",
	showStatus = false,
	showIndicators = true,
	isFade = false,
}) => {
	return (
		<Carousel
			autoPlay={autoPlay}
			infiniteLoop={infiniteLoop}
			showThumbs={showThumbs}
			thumbWidth={thumbWidth}
			renderThumbs={renderThumbs}
			stopOnHover={stopOnHover}
			swipeable={swipeable}
			emulateTouch={emulateTouch}
			interval={interval}
			transitionTime={transitionTime}
			centerSlidePercentage={centerSlidePercentage}
			ariaLabel={ariaLabel}
			useKeyboardArrows={true}
			showStatus={showStatus}
			showIndicators={showIndicators}
			animationHandler={isFade ? "fade" : "slide"}
			centerMode={true}
		>
			{children}
		</Carousel>
	);
};

export default CarouselCtn;
