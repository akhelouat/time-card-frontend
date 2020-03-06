const axios = require('axios');

export function addMember(firstName, lastName, mail, address, addressCP, mobileNumber, poleEmploiNumber, namePromo, presence) {
    return axios.request({
            method: 'post',
            url: '/api/addMember',
            data: {
                firstName,
                lastName,
                mail,
                address,
                addressCP,
                mobileNumber,
                poleEmploiNumber,
                namePromo,
                presence
            }

        })
        .then(response => response.data)
}

export function getMemberByPromo(promo) {
    return axios.request({
            method: 'get',
            url: '/api/getMemberByPromo/' + promo,

        })
        .then(response => response.data)
}

export function getMember() {
    return axios.request({
            method: 'get',
            url: '/api/getMember'
        })
        .then(response => response.data)
}

export function getOneMember(_id) {
    return axios.request({
            method: 'get',
            url: '/api/getMember/' + _id,

        })
        .then(response => response.data)
}

export function login(username, password) {
    return axios.request({
            method: 'post',
            url: '/api/login',
            data: {
                username,
                password
            }
        })
        .then(response => response.data)
}

export function updateMember(_id, params, newValue1) {
    return axios.request({
            method: 'put',
            url: '/api/updateMember',
            data: {
                _id,
                [params]: newValue1,
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

export function changePassword(oldPass, newPass) {
    return axios.request({
        method: 'put',
        url: '/api/changePassword',
        data: {
            _id,
            oldPass,
            newPass
        }

    })
    .then(response => response.data)
}
