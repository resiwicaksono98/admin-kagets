import axios from "axios"
import { useNavigate } from "react-router-dom"
const BaseUrl = process.env.REACT_APP_BASE_URL


export const getNews = async () => {
	const { data } = await axios.get(`${BaseUrl}/news`)
	return data
}

export const getNewsById = async ({ id }) => {
	const { data } = await axios.get(`${BaseUrl}/news/${id}`)
	return data.data
}

export const NewsDelete = async ({ id }) => {
	const { data } = await axios.delete(`${BaseUrl}/news/${id}`)
	return data.data
}

export const NewsUpdate = async ({ id, value }) => {
	await axios.put(`${BaseUrl}/news/${id}`, value, {
		headers: {
			"content-type": "multipart/form-data"
		}
	})
}

export const NewsCreate =  ({ value }) => {
		
	} 



