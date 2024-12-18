
const products = [
	{id: 1, name: 'teapot'},
	{id: 2, name: 'iron'}
]

export const List = () => {
	return (
		<ul>
			{products.map(({id, name}) => (
				<li key={id}>
					{name}
				</li>
			))}
		</ul>
	);
};
