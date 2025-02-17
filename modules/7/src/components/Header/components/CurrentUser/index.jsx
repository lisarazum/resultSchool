import { useContext } from 'react';
import { AppContext } from '../../../../context.js';

const CurrentUser = () => {
	const { name } = useContext(AppContext);
	return (
		<div>
			<div>Текущий пользователь: {name}</div>
		</div>
	);
};

export default CurrentUser;
