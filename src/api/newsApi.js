import axios from "axios"
import { BaseUrl } from "../Config/ConfigApi"

export const getNews = async () => {
    const { data } = await axios.get(`${BaseUrl}/news`)
    return data.data
}

export const getNewsById = async ({id}) => {
    const { data } = await axios.get(`${BaseUrl}/news/${id}`)
    return data.data
}

export const updateNews = async (id, formData) => {
        const store = await axios.put(`${BaseUrl}/news/${id}`, formData, {
            headers: {
                "content-type": "multipart/form"
            }
        })
        console.log(store)

}

