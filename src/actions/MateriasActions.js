import HttpCliente from '../services/HttpClientToken';


export const Materias = () => {
    return new Promise((resolve, reject) => {
        HttpCliente.get('/v1/materias', token)
            .then(response => {
                resolve(response);
            })
            .catch((error) => {
                resolve(error.response);
            });
    });
}


export const Materia = (id) => {
    return new Promise((resolve, reject) => {
        HttpCliente.get(`/v1/materias/${id}`, token)
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
