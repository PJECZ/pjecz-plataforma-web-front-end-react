import HttpClientToken from '../services/HttpClientToken'


export const Autoridades = () => {
    return new Promise((resolve, eject) => {
        const token = window.localStorage.getItem('token')
        if (token) {
            HttpClientToken.get('/v1/autoridades', token)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    resolve(error.response)
                })
        }
    })
}


export const Autoridad = (id) => {
    return new Promise((resolve, eject) => {
        const token = window.localStorage.getItem('token')
        if (token) {
            HttpClientToken.get(`/v1/autoridades/${id}`, token)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    resolve(error.response)
                })
        }
    })
}
