const axios = require('axios');

export function addPromo() {
    return axios.request({
            method: 'post',
            url: '/api/addPromo'
        })
        .then(response => response.data);
}