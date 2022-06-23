import axios from "axios"
import { BaseUrl } from "../Config/ConfigApi"
import Cookie from 'js-cookie'

export const getComplaintResultById = async (id) => {
    const { data } = await axios.get(`${BaseUrl}/complaint_result/${id}`, {
        headers: { 'Authorization': `Bearer ${Cookie.get('x-auth-token')}` }
    })
    return data
}

export const updateComplaintResult = async ({id, values}) => {
    const {data} =  await axios.put(`http://localhost:3000/api/complaint_result/${id}`,values, {
        headers: { 'Authorization': `Bearer ${Cookie.get('x-auth-token')}` }
    })
    return data
}