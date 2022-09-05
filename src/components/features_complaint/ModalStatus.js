import React from 'react'
import moment from 'moment'
import { Flip, toast, ToastContainer, Zoom } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const ModalStatus = ({ isShowing, hide, data }) => {
	const navigate = useNavigate()

	const handleQuickStatus = async (e) => {
		const loading = toast.loading('loading.....')
		try {
			const changeStatus = await axios.patch(`http://localhost:5000/api/complaint_result/${data.id}`, { status: e })
			if (changeStatus.status === 200) {
				toast.update(loading, { render: 'Success change status', type: 'success', autoClose: 1000, transition: Flip, isLoading: false })
				setTimeout(() => {
					navigate(0)
				}, 1000)
			}
		} catch (error) {
			toast.update(loading, { render: error.response.data, type: 'error', autoClose: 1000, transition: Flip, isLoading: false })
		}
	}
	return (
		isShowing ?
			<React.Fragment>
				<ToastContainer transition={Zoom} />
				<div className={`modal is-active`}>
					<div className="modal-background" />
					<div className="modal-card">
						<header className="modal-card-head">
							<p className="modal-card-title">Change Status Complaint </p>
							<button
								onClick={hide}
								className="delete"
							/>
						</header>
						<section className="modal-card-body">
							<ul className=''>
								<li className='py-2 px-3'>Status: <strong> {data.status}</strong></li>
								<li className='py-2 px-3'>Estimated time: <strong>{data.estimated_time}</strong> Hari</li>
								<li className='py-2 px-3 flex'>Created At : {moment(data.createdAt).format('h:mm:A - D MMM YYYY')}  </li>
							</ul>
						</section>
						<footer className="modal-card-foot">
							<button className="button is-success" name='success' onClick={(e) => handleQuickStatus(e.target.name)}>Success</button>
							<button className="button is-dark" name='pending' onClick={(e) => handleQuickStatus(e.target.name)}>Pending</button>
							<button className="button is-warning" name='need_file' onClick={(e) => handleQuickStatus(e.target.name)}>Need File</button>
							<button className="button is-danger" name='rejected' onClick={(e) => handleQuickStatus(e.target.name)}>Rejected</button>
						</footer>
					</div>
				</div>
			</React.Fragment>
			: null
	)
}



export default ModalStatus