import styles from "./ModalIcons.module.css";
const GiftBox = ({ fill = "white", width = "16", height = "16", location }) => {
	return (
		<svg
			className={location === "modal" ? styles.modal__gift : styles.gift}
			width={width}
			height={height}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				className={location === "modal" ? styles.modal__gift : ""}
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3 2.5C3 1.11929 4.11929 0 5.5 0C6.88071 0 8 1.11929 8 2.5C8 1.11929 9.11929 0 10.5 0C11.8807 0 13 1.11929 13 2.5V2.506C13 2.576 13 2.776 12.962 3H15C15.5523 3 16 3.44772 16 4V5C16 5.55228 15.5523 6 15 6H1C0.447715 6 0 5.55228 0 5V4C0 3.44772 0.447715 3 1 3H3.038C3.01159 2.83668 2.99888 2.67144 3 2.506V2.5ZM4.068 3H7V2.5C7 1.9641 6.7141 1.46891 6.25 1.20096C5.7859 0.933013 5.2141 0.933013 4.75 1.20096C4.2859 1.46891 4 1.9641 4 2.5C4 2.585 4.002 2.774 4.045 2.93C4.05101 2.95385 4.05869 2.97724 4.068 3ZM11.932 3H9V2.5C9 1.67157 9.67157 1 10.5 1C11.3284 1 12 1.67157 12 2.5C12 2.585 11.998 2.774 11.955 2.93C11.9489 2.95381 11.9412 2.9772 11.932 3ZM15 7V14.5C15 15.3284 14.3284 16 13.5 16H9V7H15ZM1 14.5C1 15.3284 1.67157 16 2.5 16H7V7H1V14.5Z"
				fill={fill}
			/>
		</svg>
	);
};

export default GiftBox;
