import HttpCliente from '../services/HttpClientToken'


export const Redams = (filtros) => {
    return new Promise((resolve, reject) => {
        const token = window.localStorage.getItem('token')
        if (token) {
            let ruta = '/v1/redams'
            if (filtros.distrito_id) {
                ruta = ruta + `?distrito_id=${filtros.distrito_id}`
            }
            if (filtros.domicilio_id) {
                ruta = ruta + `?domicilio_id=${filtros.domicilio_id}`
            }
            HttpCliente.get(ruta, token)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    resolve(error.response)
                })
        }
    })
}


export const Redam = (id) => {
    return new Promise((resolve, reject) => {
        const token = window.localStorage.getItem('token')
        if (token) {
            HttpCliente.get(`/v1/redams/${id}`, token)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    resolve(error.response)
                })
        }
    })
}
