import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LogOut, reset } from '../features/authSlice'

const Navbar = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { user } = useSelector((state) => state.auth)

	const logout = () => {
		dispatch(LogOut())
		dispatch(reset())
		navigate("/")
	}
	return (
		<div>
			<nav className="navbar mx-5" role="navigation" aria-label="main navigation">
				<div className="navbar-brand is-size-2 is-italic has-text-weight-semibold is-family-sans-serif has-text-info py-2 px-4">
					Admin Kagets App
				</div>
				<div id="navbarBasicExample" className="navbar-menu">
					<div className="navbar-end">
						<div className="navbar-item">
							<div className="buttons">
								<button className="button is-info" onClick={logout}>
									<strong>Logout</strong>
								</button>
							</div>
						</div>
					</div>
				</div>
			</nav>

		</div>

	)
}

export default Navbar