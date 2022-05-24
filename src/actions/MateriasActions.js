import HttpCliente from '../services/HttpClientToken'


export const Materias = () => {
    return new Promise((resolve, reject) => {
        const data = JSON.parse(window.localStorage.getItem('data'))
        if (data) {
            const { access_token } = data
            HttpCliente.get('/v1/materias', access_token)
                .then(response => {
                    resolve(response)
                })
                .catch((error) => {
                    resolve(error.response)
                })
        }
    })
}


export const Materia = (id) => {
    return new Promise((resolve, reject) => {
        const data = JSON.parse(window.localStorage.getItem('data'))
        if (data) {
            const { token } = data
            HttpCliente.get(`/v1/materias/${id}`, token)
                .then(response => {
                    resolve(response)
                })
                .catch((error) => {
                    resolve(error.response)
                })
        }
    })
}
