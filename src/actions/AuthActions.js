import axios from 'axios'


export const LogIn = (username, password) => {
    return new Promise((resolve, reject) => {
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        const params = new URLSearchParams()
        params.append('username', username)
        params.append('password', password)
        axios.post('/token', params, headers)
            .then( response => {
                resolve(response)
            })
            .catch( error => {
                resolve(error.response)
            })
    })
}
