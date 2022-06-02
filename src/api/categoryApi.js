import axios from "axios"
import { BaseUrl } from "../Config/ConfigApi"

export const allCategory = async () => {
    const {data} = await axios.get(`${BaseUrl}/categories`)
    return data.data
}