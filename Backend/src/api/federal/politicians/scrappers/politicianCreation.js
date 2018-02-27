const Promise = require('bluebird')
const request = require('request-promise')
const PoliticianSchema = require('../politician')
const expenseCreation = require('./expensesCreation')

const idUrls = require('./idScrapper')

function politicalUrl() {
  return idUrls().then(resp => {
    return Promise.map(resp, e => politicalRequision(e) ), { currency: 10 }
  })
}

function politicalRequision(id) {
  const options = {
    uri: 'https://dadosabertos.camara.leg.br/api/v2/deputados/' + id,
    json: true
  }
  request(options).then(resp => {
    const politicianInfo = resp.dados
    const lastInfo = politicianInfo.ultimoStatus
    
    const politician = new PoliticianSchema({

      id: politicianInfo.id,
      kind: 'DEPUTADO FEDERAL',
      electoralUf: lastInfo.siglaUf,
      civilName: politicianInfo.nomeCivil,
      politicalPartyInitials: lastInfo.siglaPartido,
      uriPoliticalParty: lastInfo.uriPartido,          
      urlPhoto: lastInfo.urlFoto,
      updated: lastInfo.data,
      electoralName: lastInfo.nomeEleitoral,
      cabinetPhone: lastInfo.gabinete.telefone,
      email: lastInfo.gabinete.email,
      situation: lastInfo.situacao,
      electoralCondition: lastInfo.condicaoEleitoral,
      actualStatus: lastInfo.descricaoStatus,
      gender: politicianInfo.sexo,
      dateOfBirth: politicianInfo.dataNascimento,
      ufOfBirth: politicianInfo.ufNascimento,
      hometown: politicianInfo.municipioNascimento,
      scholarity: politicianInfo.escolaridade
    })
      politician.save(console.log('New politician created'))
      expenseCreation(options.uri, politician._id)
  })
}


politicalUrl()