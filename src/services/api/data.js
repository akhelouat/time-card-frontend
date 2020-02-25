const axios = require('axios');

export function addPromo() {
    return axios.request({
        method: 'post',
        url: '/api/addPromo'
    })
    .then(response => response.data);
}

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

export function data() {
    return axios
.get('/api/getData')
.then(response => response.data)
}