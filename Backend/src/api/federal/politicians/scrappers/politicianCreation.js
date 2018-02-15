const Promise = require('bluebird')
const request = require('request-promise')
const PoliticianSchema = require('../politician')

const idUrls = require('./idScrapper')

function politicalUrl() {
  return idUrls().then(resp => {
    return Promise.map(resp, e => politicalRequision(e) ), { currency: 10 }
  })
}

function politicalRequision(url) {
  const options = {
    uri: url,
    json: true
  }
  request(options).then(resp => {
    const politicianInfo = resp.dados
    const lastInfo = politicianInfo.ultimoStatus
    
    const politician = new PoliticianSchema 
      politician.id = politicianInfo.id
      politician.civilName = politicianInfo.nomeCivil
      politician.politicalPartyInitials = lastInfo.siglaPartido
      politician.uriPoliticalParty = lastInfo.uriPartido          
      politician.urlPhoto = lastInfo.urlFoto
      politician.updated = lastInfo.data
      politician.electoralName = lastInfo.nomeEleitoral
      politician.cabinetPhone = lastInfo.gabinete.telefone
      politician.email = lastInfo.gabinete.email
      politician.situation = lastInfo.situacao
      politician.electoralCondition = lastInfo.condicaoEleitoral
      politician.actualStatus = lastInfo.descricaoStatus
      politician.gender = politicianInfo.sexo
      politician.dateOfBirth = politicianInfo.dataNascimento
      politician.ufOfBirth = politicianInfo.ufNascimento
      politician.hometown = politicianInfo.municipioNascimento
      politician.scholarity = politicianInfo.escolaridade
      politician.save(console.log('New politician created'))
  })

}


politicalUrl()