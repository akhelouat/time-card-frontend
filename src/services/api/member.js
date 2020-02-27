const axios = require('axios');

export function addMember(firstName, lastName, mail, address, addressCP, mobileNumber, poleEmploiNumber, namePromo) {
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
                namePromo
            }

        })
        .then(response => response.data)
}

export function getMemberByPromo(Promo) {
    return axios.request({
            method: 'get',
            url: '/api/getMemberByPromo',
            data: {
                Promo,
            }
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

export function updateMember(_id, params, newValue) {
    return axios.request({
            method: 'put',
            url: '/api/updateMember',
            data: {
                _id,
                [params]: newValue,
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