import HttpClientToken from '../services/HttpClientToken'
import HttpClientUrlEncoded from '../services/HttpClientUrlEncoded'


export const LogIn = (cliente) => {
    return new Promise((resolve, reject) => {
        const params = new URLSearchParams()
        params.append('username', cliente.username)
        params.append('password', cliente.password)
        HttpClientUrlEncoded.post('/token', params)
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                resolve(error.response)
            })
    })
}


export const Profile = () => {
    return new Promise((resolve, eject) => {
        const token = window.localStorage.getItem('token')
        if (token) {
            HttpClientToken.get(`/profile`, token)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    resolve(error.response)
                })
        }
    })
}
