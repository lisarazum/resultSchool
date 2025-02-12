import './index.scss';
const ServicePage = ({ title = '404', text = 'Page Not Found' }) => {
	return (
		<div className="service-page">
			<h1 className="service-page__title">{title}</h1>
			<p className="service-page__text">{text}</p>
			<a href="/" className="service-page__link">
				Go back to the main page
			</a>
		</div>
	);
};

export default ServicePage;
