import axios from 'axios'


export const LogIn = usuario => {
    return new Promise((resolve, reject) => {
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        const params = new URLSearchParams()
        params.append('username', formData.username)
        params.append('password', formData.password)
        axios.post('/token', params, headers).then( response => {
            if (response.status === 200) {
                const { data } = response
                window.localStorage.setItem('data', JSON.stringify(data))
            } else {
                resolve(response)
            }
        })
        .catch( error => {
            resolve(error.response)
        })
    })
}
