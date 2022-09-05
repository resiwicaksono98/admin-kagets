import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../components/Login'
import EditComplaint from '../pages/complaint/EditComplaint'
import Complaint from '../pages/complaint/Index'
import Dashboard from '../pages/Dashboard'
import CreateNews from '../pages/news/CreateNews'
import EditNews from '../pages/news/EditNews'
import News from '../pages/news/Index.js'
import Category from '../pages/category/Index.js'
import EditCategory from '../pages/category/EditCategory'
import CreateCategory from '../pages/category/CreateCategory'
import Problem from '../pages/problem/Index.js'
import CreateProblem from '../pages/problem/CreateProblem'
import EditProblem from '../pages/problem/EditProblem'

const index = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/news' element={<News />} />
					<Route path='/news/create' element={<CreateNews />} />
					<Route path='/news/:id' element={<EditNews />} />
					<Route path='/complaint' element={<Complaint />} />
					<Route path='/complaint_result/:id' element={<EditComplaint />} />
					<Route path='/category' element={<Category />} />
					<Route path='/category/create' element={<CreateCategory />} />
					<Route path='/category/:id' element={<EditCategory />} />
					<Route path='/problem' element={<Problem />} />
					<Route path='/problem/create' element={<CreateProblem />} />
					<Route path='/problem/:id' element={<EditProblem />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default index