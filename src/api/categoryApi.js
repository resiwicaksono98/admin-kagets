import axios from "axios"
const BaseUrl = process.env.REACT_APP_BASE_URL

export const allCategory = async () => {
	const { data } = await axios.get(`${BaseUrl}/category`)
	return data.data
}

export const GetByIdCategory = async (id) => {
	;
	const { data } = await axios.get(`${BaseUrl}/category/${id}`)
	return data
}

export const newCategory = async (value) => {
	const { data } = await axios.post(`${BaseUrl}/category`, value, {
	})
	return data.data
}

export const updateCategory = async ({ id, value }) => {
	console.log();
	const { data } = await axios.put(`${BaseUrl}/category/${id}`, value, {
	})
	return data.data
}

export const deleteCategory = async (id) => {
	const { data } = await axios.delete(`${BaseUrl}/category/${id}`, {
	})
	return data
}


