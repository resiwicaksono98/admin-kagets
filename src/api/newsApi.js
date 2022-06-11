import axios from "axios"
import { BaseUrl } from "../Config/ConfigApi"

export const getNews = async (page) => {
    const { data } = await axios.get(`${BaseUrl}/news/?page=${page}`)
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

export const NewsCreate = async ({ value }) => {
    await axios.post(`${BaseUrl}/news`, value, {
        headers: {
            "content-type": "multipart/form-data"
        }
    })
}


