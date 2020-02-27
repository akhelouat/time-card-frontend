const axios = require('axios');

export function addPromo(name, start, end) {
    return axios.request({
            method: 'post',
            url: '/api/addPromo',
            data: {
                name,
                start,
                end
            }
        })
        .then(response => response.data);
}

export function getPromo() {
    return axios.request({
            method: 'get',
            url: '/api/getPromo',
        })
        .then(response => response.data);
}

export function updatePromo(_id, params, newValue) {
    return axios.request({
            method: 'put',
            url: '/api/updatePromo',
            data: {
                _id,
                [params]: newValue,
            }
        })
        .then(response => response.data);
}

export function deletePromo(name) {
    return axios.request({
            method: 'delete',
            url: '/api/deletePromo',
            data: {
                name
            }
        })
        .then(response => response.data);
}