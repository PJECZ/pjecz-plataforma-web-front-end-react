import HttpCliente from '../services/HttpClientToken'


export const Domicilios = () => {
    return new Promise((resolve, reject) => {
        const data = JSON.parse(window.localStorage.getItem('data'))
        if (data) {
            const { access_token } = data
            HttpCliente.get('/v1/domicilios', access_token)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    resolve(error.response)
                })
        }
    })
}


export const Domicilio = (id) => {
    return new Promise((resolve, reject) => {
        const data = JSON.parse(window.localStorage.getItem('data'))
        if (data) {
            const { access_token } = data
            HttpCliente.get(`/v1/domicilios/${id}`, access_token)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    resolve(error.response)
                })
        }
    })
}
