import HttpCliente from '../services/HttpClientToken'


export const Oficinas = (filtros) => {
    return new Promise((resolve, reject) => {
        const data = JSON.parse(window.localStorage.getItem('data'))
        if (data) {
            const { access_token } = data
            let ruta = '/v1/oficinas'
            if (filtros.distrito_id) {
                ruta = ruta + `?distrito_id=${filtros.distrito_id}`
            }
            HttpCliente.get(ruta, access_token)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    resolve(error.response)
                })
        }
    })
}


export const OficinasDelDistrito = (distrito_id) => {
    return new Promise((resolve, reject) => {
        const data = JSON.parse(window.localStorage.getItem('data'))
        if (data) {
            const { access_token } = data
            HttpCliente.get(`/v1/oficinas?distrito_id=${distrito_id}`, access_token)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    resolve(error.response)
                })
        }
    })
}


export const Oficina = (id) => {
    return new Promise((resolve, reject) => {
        const data = JSON.parse(window.localStorage.getItem('data'))
        if (data) {
            const { access_token } = data
            HttpCliente.get(`/v1/oficinas/${id}`, access_token)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    resolve(error.response)
                })
        }
    })
}
