const ids = require('./idScrapper')
const createPolitician = require('./politicalCreation')
const URLS = []

function idUrls() {
  ids().then( resp => resp
    .map(array => Array.from(array, urlsPusher ) )
  ).then( /*CODE TO CREATE POLITICIANS*/ )
}

function urlsPusher(element) {
  URLS.push('https://dadosabertos.camara.leg.br/api/v2/deputados/' + element)
}

idUrls()