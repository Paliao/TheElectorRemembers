const request = require('request-promise')
const ids = []

function paginate() {
  const requests = []

  for(let i = 1; i < 7; i++){
    const options = {
      uri: `https://dadosabertos.camara.leg.br/api/v2/deputados?itens=100&pagina=${i}`,
      json: true
    }
    requests.push( scrap(options) )
  }
  return Promise.all( requests )
}

function scrap(options) {
  return request(options).then((resp) => resp.dados
    .map(e => e.id))
}

module.exports = paginate