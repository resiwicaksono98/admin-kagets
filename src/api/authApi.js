import axios from "axios"
import { BaseUrl } from "../Config/ConfigApi"
import Cookie from 'js-cookie'


const token = Cookie.get('x-auth-token')

export const getUser = async () => {
    const { data } = await axios.get(`${BaseUrl}/users`, {
        headers: { 'Authorization': `Bearer ${token}` }
    })
    return data
}

export const login = async (value) => {
    const { data } = await axios.post(`${BaseUrl}/login`, value)
    return data
}

export const logout = async () => {
    const { data } = await axios.post(`${BaseUrl}/logout`, '', {
        headers: { 'Authorization': `Bearer ${token}` }
    })
    return data
}