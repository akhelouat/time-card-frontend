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