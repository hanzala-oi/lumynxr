"use client";
import * as React from "react";
import {
	motion,
	useMotionTemplate,
	useScroll,
	useTransform,
} from "framer-motion";

interface iISmoothScrollHeroProps {
	/**
	 * Height of the scroll section in pixels
	 * @default 1500
	 */
	scrollHeight: number;
	/**
	 * Video URL for desktop view (webm or mp4)
	 * @default "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
	 */
	desktopVideo: string;
	/**
	 * Video URL for mobile view (webm or mp4)
	 * @default "https://sample-videos.com/zip/10/mp4/SampleVideo_720x480_1mb.mp4"
	 */
	mobileVideo: string;
	/**
	 * Initial clip path percentage
	 * @default 25
	 */
	initialClipPercentage: number;
	/**
	 * Final clip path percentage
	 * @default 75
	 */
	finalClipPercentage: number;
}

interface iISmoothScrollHeroBackgroundProps extends iISmoothScrollHeroProps {}

const SmoothScrollHeroBackground: React.FC<
	iISmoothScrollHeroBackgroundProps
> = ({
	scrollHeight,
	desktopVideo,
	mobileVideo,
	initialClipPercentage,
	finalClipPercentage,
}) => {
	const {scrollY} = useScroll();

	const clipStart = useTransform(
		scrollY,
		[0, scrollHeight],
		[initialClipPercentage, 0],
	);
	const clipEnd = useTransform(
		scrollY,
		[0, scrollHeight],
		[finalClipPercentage, 100],
	);

	const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;

	const scale = useTransform(
		scrollY,
		[0, scrollHeight + 500],
		[1.7, 1],
	);

	return (
		<motion.div
			className="sticky top-0 h-screen w-full bg-black overflow-hidden"
			style={{
				clipPath,
				willChange: "transform, opacity",
			}}
		>
			{/* Mobile video */}
			<motion.video
				className="absolute inset-0 w-full h-full object-cover md:hidden"
				style={{
					scale,
				}}
				autoPlay
				muted
				loop
				playsInline
			>
				<source src={mobileVideo} type="video/mp4" />
				<source src={mobileVideo.replace('.mp4', '.webm')} type="video/webm" />
				Your browser does not support the video tag.
			</motion.video>

			{/* Desktop video */}
			<motion.video
				className="absolute inset-0 w-full h-full object-cover hidden md:block"
				style={{
					scale,
				}}
				autoPlay
				muted
				loop
				playsInline
			>
				<source src={desktopVideo} type="video/mp4" />
				<source src={desktopVideo.replace('.mp4', '.webm')} type="video/webm" />
				Your browser does not support the video tag.
			</motion.video>
		</motion.div>
	);
};

/**
 * A smooth scroll hero component with parallax video background effect
 * @param props - Component props
 * @returns React component
 */
const SmoothScrollHero: React.FC<iISmoothScrollHeroProps> = ({
	scrollHeight = 1500,
	desktopVideo = "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
	mobileVideo = "https://sample-videos.com/zip/10/mp4/SampleVideo_720x480_1mb.mp4",
	initialClipPercentage = 25,
	finalClipPercentage = 75,
}) => {
	return (
		<div
			style={{height: `calc(${scrollHeight}px + 100vh)`}}
			className="relative w-full"
		>
			<SmoothScrollHeroBackground
				scrollHeight={scrollHeight}
				desktopVideo={desktopVideo}
				mobileVideo={mobileVideo}
				initialClipPercentage={initialClipPercentage}
				finalClipPercentage={finalClipPercentage}
			/>
		</div>
	);
};

export default SmoothScrollHero;