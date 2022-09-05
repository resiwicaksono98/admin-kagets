import React,{useEffect} from 'react'
import Layout from '../Layout'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../../features/authSlice'
import FormEditProblem from '../../components/features_problem/FormEditProblem'

const EditProblem = () => {
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
			<FormEditProblem />
		</Layout>
	)
}

export default EditProblem