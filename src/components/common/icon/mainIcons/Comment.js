import styles from "./ModalIcons.module.css";
const Comment = ({ width, height, origin }) => {
	const assignClasses = (origin) => {
		return origin === "modal" ? `${styles.btn__icon} ${styles.modal__comment} ${styles[`${origin}.btn__icon`]}` : `${styles.btn__icon} ${styles.comment} ${styles[`${origin}.btn__icon`]}`
	}

	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 16 15"
			fill="white"
			xmlns="http://www.w3.org/2000/svg"
			className={assignClasses(origin)}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8 14C12.418 14 16 10.866 16 7C16 3.134 12.418 0 8 0C3.582 0 0 3.134 0 7C0 8.76 0.744 10.37 1.969 11.6C1.873 12.616 1.553 13.73 1.199 14.566C1.12 14.752 1.272 14.96 1.472 14.928C3.728 14.558 5.069 13.99 5.653 13.694C6.41859 13.8982 7.20765 14.0011 8 14ZM4 6C4.55228 6 5 6.44772 5 7C5 7.55228 4.55228 8 4 8C3.44772 8 3 7.55228 3 7C3 6.44772 3.44772 6 4 6ZM9 7C9 6.44772 8.55229 6 8 6C7.44772 6 7 6.44772 7 7C7 7.55228 7.44772 8 8 8C8.55229 8 9 7.55228 9 7ZM13 7C13 7.55228 12.5523 8 12 8C11.4477 8 11 7.55228 11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7Z"
				fill="white"
			/>
		</svg>
	);
};

export default Comment;
