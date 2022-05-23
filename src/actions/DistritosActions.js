import HttpClientToken from '../services/HttpClientToken';


export const Distritos = () => {
    return new Promise((resolve, eject) => {
        const data = JSON.parse(window.localStorage.getItem('data'));
        if (data) {
            const { access_token } = data;
            HttpClientToken.get('/v1/distritos', access_token)
                .then(response => {
                    resolve(response);
                })
                .catch((error) => {
                    resolve(error.response);
                });
        }
    });
}


export const Distrito = (id) => {
    return new Promise((resolve, eject) => {
        const data = JSON.parse(window.localStorage.getItem('data'));
        if (data) {
            const { token } = data;
            HttpClientToken.get(`/v1/distritos/${id}`, token)
                .then(response => {
                    if (response.status === 200) {
                        resolve(response);
                    }
                })
                .catch((error) => {
                    resolve(error.response);
                });
        }
    });
}
