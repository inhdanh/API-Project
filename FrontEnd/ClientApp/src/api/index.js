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
}
export default API