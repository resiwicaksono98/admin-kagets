import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Breadcrumb from '../molecule/Breadcrumb'
import * as yup from 'yup'
import ConfirmAlert from '../molecule/ConfirmAlert'
import { toast, ToastContainer, Zoom, Flip } from 'react-toastify'


const FormEditProblem = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	
	useEffect(() => {
		const getProblem = async () => {
			try {
				const { data } = await axios.get(`http://localhost:5000/api/problem_type/${id}`)
				formik.values.name = data.data.name
			} catch (error) {
				console.log(error.response.data);
			}
		}
		getProblem()
	}, [id])

	const formik = useFormik({
		initialValues: {},
		validationSchema: yup.object({
			name: yup.string().required('Name Harus Diisi'),
		}),
		onSubmit: async (value) => {
			ConfirmAlert({ title: 'Update Data', message: 'Lanjut Update Problem?', onClick: () => updateHandler() })
			const updateHandler = async () => {
				const loading = toast.loading("Please wait....")
				try {
					await axios.patch(`http://localhost:5000/api/problem_type/${id}`, value,)
					toast.update(loading, { render: 'Success Update', type: 'success', autoClose: 1000, transition: Flip, isLoading: false, position: 'top-center' })
					setTimeout(() => {
						navigate('/problem')
					}, 1200)
				} catch (error) {
					console.log(error.response.data);
					toast.update(loading, { render: error.response.data.msg, type: 'error', autoClose: 1000, transition: Flip, isLoading: false, position: 'top-center' })
				}
			}
		}
	})

	return (
		<div>
			<Breadcrumb data={[{ name: 'Problem', class: '' }, { name: 'Edit', class: 'is-active' }]} />
			<ToastContainer transition={Zoom} />
			<form onSubmit={formik.handleSubmit}>
				<div className="field mb-3">
					<label className="label">Name</label>
					<div className="control">
						<input className="input" name='name' type="text" placeholder="Name" value={formik.values.name || ''} onChange={formik.handleChange} onBlur={formik.handleBlur} />
					</div>
					<div className='mt-3 has-text-danger'>{formik.errors.name && formik.touched.name ? formik.errors.name : ''}</div>
				</div>
				<button type='submit' className="button is-info">Update</button>

			</form>
		</div>
	)
}

export default FormEditProblem