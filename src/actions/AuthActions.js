import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_URL_BASE


export const LogIn = (cliente) => {
    return new Promise((resolve, reject) => {
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        const params = new URLSearchParams()
        params.append('username', cliente.username)
        params.append('password', cliente.password)
        axios.post('/token', params, headers)
            .then(response => {
                resolve(response)
            })
            .catch((error) => {
                resolve(error.response)
            })
    })
}
