import axios from 'axios'
const BASE_URL = 'https://localhost:5001/'
class API {
    static get = url => {
        return axios.get(`${BASE_URL}${url}`)
    }
    static post = (url, data) => {
        return axios.post(`${BASE_URL}${url}`, data)
    }
    static put = (url, data) => {
        return axios.put(`${BASE_URL}${url}`, data)
    }
}
export default API