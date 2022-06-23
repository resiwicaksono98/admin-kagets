import axios from "axios"
import { BaseUrl } from "../Config/ConfigApi"
import Cookie from 'js-cookie'

export const allCategory = async () => {
    const {data} = await axios.get(`${BaseUrl}/categories`)
    return data.data
}

export const GetByIdCategory = async (id) => {;
    const {data} = await axios.get(`${BaseUrl}/categories/${id}`)
    return data
}

export const newCategory = async(value) => {
    const {data} = await axios.post(`${BaseUrl}/categories`, value, {
        headers: {
            "Authorization" : `Bearer ${Cookie.get('x-auth-token')}`
        }
    })
    return data.data
}

export const updateCategory = async({id,value}) => {
    console.log();
    const {data} = await axios.put(`${BaseUrl}/categories/${id}`, value, {
        headers: {
            "Authorization" : `Bearer ${Cookie.get('x-auth-token')}`,     
        }
    })
    return data.data
}

export const deleteCategory = async (id) => {
    const {data} = await axios.delete(`${BaseUrl}/categories/${id}`, {
        headers: {
            "Authorization" : `Bearer ${Cookie.get('x-auth-token')}`,     
        }
    })
    return data
}


