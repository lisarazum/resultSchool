import { Link, Outlet } from 'react-router-dom';

export const Catalog = () => {
	const fetchProductList = () => [
		{ id: 1, name: 'TV' },
		{ id: 2, name: 'IPhone' },
		{ id: 3, name: 'LapTop' },
	];

	return (
		<>
			<section>
				<h1>Catalog</h1>
				<img
					src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWJqYm52cHptczhidXl1MDU3MDdoN250NnFjaml2MWNuNjAwOXNzcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYt5jPR6QX5pnqM/giphy.gif"
					alt=""
				/>
				<ul>
					{fetchProductList().map(({ id, name }) => (
						<li key={id}>
							<Link to={`product/${id}`}>{name}</Link>
						</li>
					))}
				</ul>
			</section>
			<Outlet />
		</>
	);
};
