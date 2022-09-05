import React,{useEffect} from 'react'
import CategoryList from '../../components/features_category/CategoryList'
import Layout from '../Layout'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../../features/authSlice'

const Index = () => {
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
			<CategoryList />
		</Layout>
	)
}

export default Index