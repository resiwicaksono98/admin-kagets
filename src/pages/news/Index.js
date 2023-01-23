import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../Layout'
import { getNews } from '../../api/newsApi'
import { useDispatch, useSelector } from 'react-redux'
import { getMe, refreshAccessToken } from '../../features/authSlice'
import NewsList from '../../components/features_news/NewsList'


const Index = () => {
	const [newst, setNewst] = useState([])
	const navigate = useNavigate()
	const { isError, } = useSelector((state) => state.auth)
	const dispatch = useDispatch()


	useEffect(() => {
		dispatch(getMe())
	}, [dispatch])

	useEffect(() => {
		if (isError) {
			navigate("/")
		}
	}, [isError, navigate])

	useEffect(() => {
		let isUnmount = false
		if (!isUnmount) {
			getNews()
				.then(result => {
					setNewst(result.data);
				})
				.catch(err => console.log(err.message))
		}
		return () => {
			isUnmount = true
		};

	}, []);


	return (
		<Layout>
			<NewsList newst={newst} />
		</Layout>
	)
}

export default Index
