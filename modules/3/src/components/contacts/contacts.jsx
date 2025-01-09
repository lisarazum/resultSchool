import { Label } from '../label/label.jsx';

export const UserContacts = ({ email, phone }) => {
	return (
		<div>
			<Label color="blue">Contacts: </Label>
			<div>Email: {email}</div>
			<div>Telephone: {phone}</div>
		</div>
	);
};
