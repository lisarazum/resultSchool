import styles from './UserCard.module.scss';
import { UserContacts } from '../contacts/contacts.jsx';
import { Label } from '../label/label.jsx';

export const UserCard = (props) => {
	const { name, age, ...contacts } = props;
	return (
		<div className={styles.user}>
			<Label color="red">User: </Label>
			<div>Name: {name}</div>
			<div>Age: {age}</div>
			<UserContacts {...contacts} />
		</div>
	);
};
