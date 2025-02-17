import UserPersonalInfo from './components/UserPersonalInfo/index.jsx';
import UserContacts from './components/UserContacts/index.jsx';

const UserBlock = () => {
	return (
		<div>
			<h2>Пользователь</h2>
			<UserPersonalInfo />
			<UserContacts />
		</div>
	);
};

export default UserBlock;
