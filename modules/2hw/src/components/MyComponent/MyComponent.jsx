import { useState } from 'react';
import './MyComponent.scss';

const getTimeFromDate = (date) => {
	return date.toISOString().substring(11, 19)
}

export const MyComponent = () => {
	const [currentDate, setCurrentDate] = useState(new Date());

	setTimeout(() => {
		setCurrentDate(new Date())
	}, 1000)

	return (
		<div className="component">{getTimeFromDate(currentDate)}</div>
	);
};
