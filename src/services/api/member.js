const axios = require('axios');

export function addMember(nom, prenom, email, adress, cp, phone, idPole) {
    return axios.request({
            method: 'post',
            url: '/api/addMember',
            data: {
                nom,
                prenom,
                email,
                adress,
                cp,
                phone,
                idPole
            }

        })
        .then(response => response.data)
}



export function getMember(email) {
    return axios.request({
            method: 'get',
            url: '/api/getMember',
            data: {
                email
                }

        })
        .then(response => response.data)
}

export function updateMember(_id, params, newValue) {
    return axios.request({
            method: 'put',
            url: '/api/updateMember',
            data: {
                _id,
                [params] : newValue,
                }

        })
        .then(response => response.data)
}

export function deleteMember(_id) {
    return axios.request({
            method: 'delete',
            url: '/api/deleteMember',
            data: {
                _id
                }

        })
        .then(response => response.data)
}