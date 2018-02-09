const request = require('request-promise')

function paginate() {
  for(let i = 1; i < 7; i++){
    const options = {
      uri: `https://dadosabertos.camara.leg.br/api/v2/deputados?itens=100&pagina=${i}`,
      json: true
    }
    scrap(options)
  }
}

function counter(data) {
  data.map(e => console.log(e))
}

function scrap(options) {
  request(options).then((resp) => counter(resp.dados)) 
}

paginate()