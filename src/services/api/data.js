const axios = require('axios');

export function addPromo() {
    return axios.request({
        method: 'post',
        url: '/api/addPromo'
    })
    .then(response => response.data);
}

export function data() {
    return axios
.get('/api/getData')
.then(response => response.data)
}