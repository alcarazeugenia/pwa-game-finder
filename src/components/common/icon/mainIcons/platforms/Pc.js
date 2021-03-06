import styles from "./Platforms.module.css";

const Pc = ({ fill = "white" }) => {
	return (
		<svg
			className={styles.platform__icon}
			id="pc"
			viewBox="0 0 13 13"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M13 5.95833H5.95833V0.998704L13 0V5.95833ZM5.41667 1.08333V5.95833H0V1.80612L5.41667 1.08333ZM5.41667 6.5H0V11.1145L5.41667 11.9167V6.5ZM5.95833 11.912V6.5H13V13L5.95833 11.912Z"
				fill={fill}
			/>
		</svg>
	);
};

export default Pc;
