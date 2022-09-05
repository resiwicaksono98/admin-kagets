import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast, Flip, Zoom, ToastContainer } from 'react-toastify'
import Breadcrumb from '../molecule/Breadcrumb'
import ConfirmAlert from '../molecule/ConfirmAlert'
import Pagination from '../molecule/Pagination'
import Search from '../molecule/Search'
import ModalDetail from './ModalDetail'
import ModalStatus from './ModalStatus'


const ComplaintList = () => {
	const [complaints, setComplaints] = useState([])
	const navigate = useNavigate()
	const [isShowingStatus, setIsShowingStatus] = useState(false);
	const [isShowingDetail, setIsShowingDetail] = useState(false);
	const [dataById, setDataById] = useState([])

	const handleStatus = async (id) => {
		try {
			setIsShowingStatus(!isShowingStatus)
			const { data } = await axios.get(`http://localhost:5000/api/complaint_result/${id}`)
			setDataById(data.data);
		} catch (error) {
		}
	}

	const handleDetail = async (id) => {
		try {
			setIsShowingDetail(!isShowingDetail)
			const { data } = await axios.get(`http://localhost:5000/api/complaints/${id}`)
			setDataById(data.data);
		} catch (error) {
		}
	}

	const handleDelete = (id) => {
		ConfirmAlert({ title: 'Delete Complaint', message: 'Yakin ingin menghapus complaint?', onClick: () => deleteAction() })

		const deleteAction = async () => {
			const loading = toast.loading("Please wait....")
			try {
				await axios.delete(`http://localhost:5000/api/complaints/${id}`)
				toast.update(loading, { render: 'Success Delete', type: 'success', autoClose: 1000, transition: Flip, isLoading: false, position: 'top-center' })
				setTimeout(() => {
					navigate(0)
				}, 1200)
			} catch (error) {
				console.log(error);
			}
		}

	}

	const getComplaint = async () => {
		try {
			const { data } = await axios.get(`http://localhost:5000/api/complaints`)
			setComplaints(data.data);
		} catch (error) {
			console.log(error.response.data);
		}

	}


	useEffect(() => {
		getComplaint()

	}, [])

	return (
		<div>
			<ToastContainer transition={Zoom} />
			<Breadcrumb data={[{ name: 'Complaint', class: '' }, { name: 'Manage', class: 'is-active' }]} />
			<Search />
			<ModalStatus isShowing={isShowingStatus} hide={handleStatus} data={dataById} />
			<ModalDetail isShowing={isShowingDetail} hide={handleDetail} data={dataById} />

			<div className="table-container ">
				<table className="table is-striped is-narrow is-hoverable is-fullwidth">
					<thead>
						<tr>
							<th className='has-text-centered'>No</th>
							<th className='has-text-centered'>Email</th>
							<th className='has-text-centered'>Status</th>
							<th className='has-text-centered'>Estimated Time</th>
							<th className='has-text-centered ' style={{ width: '20px' }}>Actions</th>
						</tr>
					</thead>
					<tbody>
						{complaints.map((complaint, index) => (
							<tr key={complaint.id}>
								<th className='has-text-centered'>{index + 1}</th>
								<td className='has-text-centered'>{complaint.user.email}</td>
								<td className='has-text-centered'>{complaint.complaint_result.status}</td>
								<td className='has-text-centered '><strong>{complaint.complaint_result.estimated_time}</strong> Days</td>
								<td className='is-flex is-justify-content-center is-align-content-center ' >
									<button className="button is-success" onClick={() => handleDetail(complaint.id)}>Detail</button>
									<button className="button is-link ml-4" onClick={() => handleStatus(complaint.complaint_result.id)}>Change Status Instant</button>
									<NavLink to={`/complaint_result/${complaint.complaint_result.id}`} className="button is-info mx-4">Edit And Send Message</NavLink>
									<button className="button is-danger" onClick={() => handleDelete(complaint.id)}>Delete</button>
								</td>
							</tr>
						))}

					</tbody>
				</table>
			</div>

			<Pagination />
		</div>
	)
}

export default ComplaintList