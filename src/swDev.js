const swDev = () => {
	let swURL = `${process.env.PUBLIC_URL}/sw.js`;
	if (navigator.serviceWorker) {
		navigator.serviceWorker.register(swURL).catch(console.error);
	}
};

export default swDev;
