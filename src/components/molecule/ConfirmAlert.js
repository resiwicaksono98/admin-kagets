import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

const ConfirmAlert = ({ title, message, onClick }) => {
	confirmAlert({
		childrenElement: () => (
			<>
				<div className='is-size-2 has-text-weight-semibold'>{title}</div>
				<div className='is-size-5 '>{message}</div>
			</>
		),
		buttons: [
			{
				label: 'Yes',
				onClick: (e) => onClick(e),
			}, {
				label: 'no',
			}
		]
	})
}

export default ConfirmAlert;
