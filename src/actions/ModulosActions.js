import HttpCliente from '../services/HttpClientToken'


export const Modulos = () => {
    return new Promise((resolve, reject) => {
        const token = window.localStorage.getItem('token')
        if (token) {
            HttpCliente.get('/v1/modulos', token)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    resolve(error.response)
                })
        }
    })
}


export const Modulo = (id) => {
    return new Promise((resolve, reject) => {
        const token = window.localStorage.getItem('token')
        if (token) {
            HttpCliente.get(`/v1/modulos/${id}`, token)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    resolve(error.response)
                })
        }
    })
}
