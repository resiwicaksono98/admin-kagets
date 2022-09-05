import React, {useEffect} from 'react'
import FormEditComplaint from '../../components/features_complaint/FormEditComplaint'
import Layout from '../Layout'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../../features/authSlice'

const EditComplaint = () => {
	const { isError } = useSelector((state) => state.auth)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getMe())
	}, [dispatch])


	useEffect(() => {
		if (isError) {
			navigate("/")
		}
	}, [isError, navigate])
  return (
		<Layout>
			<FormEditComplaint />
		</Layout>
  )
}

export default EditComplaint