import axios from "axios"
import { BaseUrl } from "../Config/ConfigApi"
import Cookie from 'js-cookie'

export const getAllProblem = async () => {
    const { data } = await axios.get(`${BaseUrl}/problem_type`)
    return data
}

export const GetByIdProblem = async (id) => {;
    const {data} = await axios.get(`${BaseUrl}/problem_type/${id}`)
    return data
}

export const newProblem = async(value) => {
    const {data} = await axios.post(`${BaseUrl}/problem_type`, value, {
        headers: {
            "Authorization" : `Bearer ${Cookie.get('x-auth-token')}`
        }
    })
    return data.data
}

export const updateProblem = async({id,value}) => {
    console.log();
    const {data} = await axios.put(`${BaseUrl}/problem_type/${id}`, value, {
        headers: {
            "Authorization" : `Bearer ${Cookie.get('x-auth-token')}`,     
        }
    })
    return data.data
}

export const deleteProblem = async (id) => {
    const {data} = await axios.delete(`${BaseUrl}/problem_type/${id}`, {
        headers: {
            "Authorization" : `Bearer ${Cookie.get('x-auth-token')}`,     
        }
    })
    return data
}


