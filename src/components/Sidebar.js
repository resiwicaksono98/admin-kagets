import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoNewspaper, IoCopy, IoHome, IoExtensionPuzzle, IoFlame } from 'react-icons/io5'
import { Disclosure } from '@headlessui/react'


const Sidebar = () => {
	return (
		<div className=' py-4 has-background-white-ter'>
			<aside className="menu mx-4 ">
				<p className="menu-label has-text-centered has-text-weight-bold">
					General
				</p>
				{/* Dashboard */}
					<NavLink to={'/dashboard'}>
				<Disclosure >
					{({ open }) => (
						<div className='py-2 menu-list'>
								<Disclosure.Button className={`button is-info ${!open ? 'is-light' : ''} has-text-weight-semibold is-fullwidth is-gapless `}>
									<div className="column mt-1 is-0">
										<IoHome />
									</div>
									<div className="column is-7">
										Dashboard
									</div>
								</Disclosure.Button>
						</div>
					)}
				</Disclosure>
					</NavLink>
				{/* News */}
				<Disclosure >
					{({ open }) => (
						<div className='menu-list py-2'>
							<Disclosure.Button className={`button is-info ${!open ? 'is-light' : ''} has-text-weight-semibold is-fullwidth is-gapless `}>
								<div className="column mt-1 is-0">
									<IoNewspaper />
								</div>
								<div className="column is-7">
									News
								</div>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4  ">
								<ul>
									<li>
										<ul>
											<li><NavLink to={"/news"} className="button is-info is-light">
												Manage
											</NavLink></li>
										</ul>
									</li>
								</ul>
							</Disclosure.Panel>
						</div>
					)}
				</Disclosure>
				{/* Complaint */}
				<Disclosure >
					{({ open }) => (
						<div className='menu-list py-2'>
							<Disclosure.Button className={`button is-info ${!open ? 'is-light' : ''} has-text-weight-semibold is-fullwidth is-gapless `}>
								<div className="column mt-1 is-0">
									<IoExtensionPuzzle />
								</div>
								<div className="column is-7">
									Complaint
								</div>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4  ">
								<ul>
									<li>
										<ul>
											<li><NavLink to={"/complaint"} className="button is-info is-light">
												Manage
											</NavLink></li>
										</ul>
									</li>
								</ul>
							</Disclosure.Panel>
						</div>
					)}
				</Disclosure>
				{/* Category */}
				<Disclosure >
					{({ open }) => (
						<div className='menu-list py-2'>
							<Disclosure.Button className={`button is-info ${!open ? 'is-light' : ''} has-text-weight-semibold is-fullwidth is-gapless `}>
								<div className="column mt-1 is-0">
									<IoCopy />
								</div>
								<div className="column is-7">
									Category
								</div>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4  ">
								<ul>
									<li>
										<ul>
											<li><NavLink to={"/category"} className="button is-info is-light">
												Manage
											</NavLink></li>
										</ul>
									</li>
								</ul>
							</Disclosure.Panel>
						</div>
					)}
				</Disclosure>
				{/* Problem */}
				<Disclosure >
					{({ open }) => (
						<div className='menu-list py-2'>
							<Disclosure.Button className={`button is-info ${!open ? 'is-light' : ''} has-text-weight-semibold is-fullwidth is-gapless `}>
								<div className="column mt-1 is-0">
									<IoFlame />
								</div>
								<div className="column is-7">
									Problem
								</div>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4  ">
								<ul>
									<li>
										<ul>
											<li><NavLink to={"/problem"} className="button is-info is-light">
												Manage
											</NavLink></li>
										</ul>
									</li>
								</ul>
							</Disclosure.Panel>
						</div>
					)}
				</Disclosure>


			</aside >
		</div>

	)
}

export default Sidebar