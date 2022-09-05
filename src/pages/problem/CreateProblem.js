import React,{useEffect} from 'react'
import Layout from '../Layout'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../../features/authSlice'
import FormAddProblem from '../../components/features_problem/FormAddProblem'

const CreateProblem = () => {
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
			<FormAddProblem />
		</Layout>
	)
}

export default CreateProblem