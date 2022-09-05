import React, { useEffect } from 'react'
import Layout from '../Layout'
import FormEditNews from '../../components/features_news/FormEditNews'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../../features/authSlice'

const EditNews = () => {
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
			<FormEditNews />
		</Layout>
	)
}

export default EditNews