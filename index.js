// Librerias o paquetes
const fs = require('fs');
const axios = require('axios');

const url = fs.readFileSync('./link.txt', 'utf-8');

axios.get(url).then((response) => {
    console.log(response.status);
    console.log(response.data);
})