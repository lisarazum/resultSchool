import styles from './label.module.scss';

export const Label = ({ color, children }) => {
	return <label className={`${styles.label} ${styles[color]}`}>{children}</label>;
};
