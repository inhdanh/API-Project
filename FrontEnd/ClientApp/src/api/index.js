import axios from 'axios'
const BASE_URL = 'https://localhost:5001/'
class API {
    static get = (url, cb) => {
        axios.get(`${BASE_URL}${url}`)
        .then(res=>{
            cb(res)
        })
        .catch(err=>{
            cb(err)
        })
    }
    static post = (url, data, cb) => {
        axios.post(`${BASE_URL}${url}`, data)
        .then(res=>{
            cb(res)
        })
        .catch(err=>{
            cb(err)
        })
    }
}
export default API