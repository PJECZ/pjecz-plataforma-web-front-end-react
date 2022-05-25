import HttpCliente from '../services/HttpClientToken'


export const Modulos = () => {
    return new Promise((resolve, reject) => {
        const data = JSON.parse(window.localStorage.getItem('data'))
        if (data) {
            const { access_token } = data
            HttpCliente.get('/v1/modulos', access_token)
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
        const data = JSON.parse(window.localStorage.getItem('data'))
        if (data) {
            const { access_token } = data
            HttpCliente.get(`/v1/modulos/${id}`, access_token)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    resolve(error.response)
                })
        }
    })
}
