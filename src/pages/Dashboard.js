import React, { useEffect } from 'react'
import Layout from './Layout'
import { IoNewspaper, IoCopy, IoExtensionPuzzle, IoFlame } from 'react-icons/io5'
import Breadcrumb from '../components/molecule/Breadcrumb'
import { useDispatch, useSelector } from 'react-redux'
import { getMe, refreshToken } from '../features/authSlice'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
	const { accessToken,user } = useSelector((state) => state.auth)
	const navigate = useNavigate()
	const dispatch = useDispatch()



	return (
		<Layout>
			<Breadcrumb data={[{ name: 'Dashboard' }, { name: 'index', class: 'is-active' }]} />

			<div className="columns is-multiline">
				<div className="column">
					<div className="card ">
						<div className="card-content">
							<div className="media has-text-centered is-flex is-align-items-center">
								<div className="media-left is-size-2 ">
									<IoExtensionPuzzle size={50} />
								</div>
								<div className="media-content">
									<p className="title is-3">Complaint</p>
								</div>
							</div>
							<div className="content is-size-2 has-text-centered">
								1000
							</div>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="card ">
						<div className="card-content">
							<div className="media has-text-centered is-flex is-align-items-center">
								<div className="media-left is-size-2 ">
									<IoNewspaper size={50} />
								</div>
								<div className="media-content">
									<p className="title is-3">News</p>
								</div>
							</div>
							<div className="content is-size-2 has-text-centered">
								1000
							</div>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="card ">
						<div className="card-content">
							<div className="media has-text-centered is-flex is-align-items-center">
								<div className="media-left is-size-2 ">
									<IoCopy size={50} />
								</div>
								<div className="media-content">
									<p className="title is-3">Category</p>
								</div>
							</div>
							<div className="content is-size-2 has-text-centered">
								1000
							</div>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="card ">
						<div className="card-content">
							<div className="media has-text-centered is-flex is-align-items-center">
								<div className="media-left is-size-2 ">
									<IoFlame size={50} />
								</div>
								<div className="media-content">
									<p className="title is-3">Problem</p>
								</div>
							</div>
							<div className="content is-size-2 has-text-centered">
								1000
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Dashboard
