var fs = require('fs-extra');
var request = require('request');

// Traemos el link desde un archivo txt
const link = fs.readFileSync('./link.txt', 'utf-8');

// Traer el html de la pagina
request
  .get(link)
  .on('response', function(response) {
    console.log(response.statusCode) // 200
    console.log(response.headers['content-type']) // 'image/png'
  })