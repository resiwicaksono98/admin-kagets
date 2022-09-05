import React from 'react'
import { NavLink } from 'react-router-dom'

const Breadcrumb = ({ data }) => {
	return (
		<nav className="breadcrumb" aria-label="breadcrumbs">
			<ul>
				{data.map((dt, index) => (
					<li className={dt.class} key={index} >
						<NavLink to={`/${dt.name}`}>{dt.name}</NavLink>
					</li>
				))}

			</ul>
		</nav>

	)
}

export default Breadcrumb