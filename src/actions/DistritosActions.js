import HttpClientToken from '../services/HttpClientToken';


export const Distritos = () => {
    return new Promise((resolve, reject) => {
        HttpClientToken.get('/v1/distritos', token)
            .then(response => {
                resolve(response);
            })
            .catch((error) => {
                resolve(error.response);
            });
    });
}


export const Distrito = (id) => {
    return new Promise((resolve, reject) => {
        HttpClientToken.get(`/v1/distritos/${id}`, token)
            .then(response => {
                if (response.status === 200) {
                    resolve(response);
                }
            })
            .catch((error) => {
                resolve(error.response);
            });
    });
}
