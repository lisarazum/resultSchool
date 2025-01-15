export const ProductList = ({ products }) => {
	return (
		<>
			{products.map(({ id, name, price }) => (
				<div key={id}>
					{name} - {price}руб
				</div>
			))}
		</>
	);
};
