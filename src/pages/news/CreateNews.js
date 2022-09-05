import React, { useEffect } from 'react'
import Layout from '../Layout'
import { getMe } from '../../features/authSlice'
import { useDispatch } from 'react-redux'
import FormCreateNews from '../../components/features_news/FormCreateNews'

const CreateNews = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getMe())
	}, [dispatch])
	return (
		<Layout>
			<FormCreateNews />
		</Layout>
	)
}

export default CreateNews