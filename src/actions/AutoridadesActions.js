import HttpClientToken from '../services/HttpClientToken'


export const Autoridades = () => {
    return new Promise((resolve, eject) => {
        const data = JSON.parse(window.localStorage.getItem('data'))
        if (data) {
            const { access_token } = data
            HttpClientToken.get('/v1/autoridades', access_token)
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
        const data = JSON.parse(window.localStorage.getItem('data'))
        if (data) {
            const { access_token } = data
            HttpClientToken.get(`/v1/autoridades/${id}`, access_token)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    resolve(error.response)
                })
        }
    })
}
