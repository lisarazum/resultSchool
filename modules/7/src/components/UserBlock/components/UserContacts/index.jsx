import { useContext } from 'react';
import { AppContext } from '../../../../context.js';
const UserContacts = () => {
	const { userData, dispatch } = useContext(AppContext);
	const { phone, email } = userData;
	return (
		<div>
			<h3>Контакты</h3>
			<div>Телефон: {phone}</div>
			<div>Email: {email}</div>
		</div>
	);
};

export default UserContacts;
