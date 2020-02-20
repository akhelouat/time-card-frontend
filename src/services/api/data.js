const axios = require('axios');


export function data() {
    return axios
.get('/api/getData')
.then(response => response.data)
}