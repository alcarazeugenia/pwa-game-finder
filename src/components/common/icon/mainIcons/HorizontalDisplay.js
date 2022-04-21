import styles from "./CardDisplay.module.css";

const HorizontalDisplay = ({ display, clickEvent }) => {
	return (
		<svg
			className={
				display
					? `${styles["cardlist__display--selected"]} ${styles["cardlist__display--horizontal"]}`
					: `${styles["cardlist__display"]} ${styles["cardlist__display--horizontal"]}`
			}
			id="horizontal-display-button"
			width="40"
			height="40"
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			onClick={clickEvent}
		>
			<rect width="40" height="40" rx="10" fill="#515151" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M27.543 8.79993H13.2573C11.6793 8.79993 10.4001 10.0791 10.4001 11.6571V15.9428C10.4001 17.5207 11.6793 18.7999 13.2573 18.7999H27.543C29.121 18.7999 30.4001 17.5207 30.4001 15.9428V11.6571C30.4001 10.0791 29.121 8.79993 27.543 8.79993ZM11.8288 11.6571C11.8288 10.8681 12.4684 10.2285 13.2573 10.2285H27.5431C28.332 10.2285 28.9716 10.8681 28.9716 11.6571V15.9428C28.9716 16.7318 28.332 17.3714 27.5431 17.3714H13.2573C12.4684 17.3714 11.8288 16.7318 11.8288 15.9428V11.6571ZM13.2573 21.6571H27.543C29.121 21.6571 30.4001 22.9362 30.4001 24.5142V28.7999C30.4001 30.3779 29.121 31.6571 27.543 31.6571H13.2573C11.6793 31.6571 10.4001 30.3779 10.4001 28.7999V24.5142C10.4001 22.9362 11.6793 21.6571 13.2573 21.6571ZM11.8288 24.5141C11.8288 23.7252 12.4684 23.0856 13.2573 23.0856H27.5431C28.332 23.0856 28.9716 23.7252 28.9716 24.5141V28.7999C28.9716 29.5888 28.332 30.2284 27.5431 30.2284H13.2573C12.4684 30.2284 11.8288 29.5888 11.8288 28.7999V24.5141Z"
				fill="black"
			/>
		</svg>
	);
};

export default HorizontalDisplay;
