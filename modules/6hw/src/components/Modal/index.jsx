import './index.scss';

const Modal = ({ closeModal, confirmModal }) => {
	return (
		<div className="modal">
			<button className="modal__close" onClick={closeModal}>
				❌
			</button>
			<div className="modal__container">
				<h2 className="modal__title">
					Are you sure you want to delete this todo?
				</h2>

				<div className="modal__buttons">
					<button className="modal__confirm" onClick={confirmModal}>
						Yes
					</button>
					<button className="modal__cancel" onClick={closeModal}>
						No
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
