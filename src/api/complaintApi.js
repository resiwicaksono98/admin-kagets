import axios from "axios"
import { BaseUrl } from "../Config/ConfigApi"
import Cookie from 'js-cookie'

export const getAllComplaint = async () => {
    const { data } = await axios.get(`${BaseUrl}/complaints`, {
        headers: { 'Authorization': `Bearer ${Cookie.get('x-auth-token')}` }
    })
    return data
}

export const getComplaintById = async (id) => {
    const { data } = await axios.get(`${BaseUrl}/complaints/${id}`, {
        headers:
            { 'Authorization': `Bearer ${Cookie.get('x-auth-token')}`, }
    })
    return data
}

export const UpdateComplaint = async ({ id, values }) => {
    const { data } = await axios.put(`${BaseUrl}/complaints/${id}`, values, {
        headers: {
            "Content-Type": "multipart/form-data",
            'Authorization': `Bearer ${Cookie.get('x-auth-token')}`
        }
    })
    return data.data
}

