const Promise = require('bluebird')
const request = require('request-promise')

const ExpenseSchema = require('./expenses')
const idUrls = require('../scrappers/idScrapper')

function expensesCreation() {
  return idUrls().then( resp => {
    return Promise.map(resp, e => expenseCreation(e) ), { currency: 10 }
  })
}

function expenseCreation(id) {
  const years = ['09', '10', '11', '12', '13', '14', '15', '16', '17', '18']

  years.map(y => 
    {
      const options = {
        uri: `https://dadosabertos.camara.leg.br/api/v2/deputados/${id}/despesas?ano=20${y}`,
        json: true
      }
      request(options).then(resp => {
        const data = resp.dados
        new ExpenseSchema({
          year: dados.ano,
          month: data.mes,
          kindOfExpense: data.tipoDespesa,
          documentType: data.tipoDocumento,
          date: data.dataDocumento,
          price: data.valorLiquido,
          serviceProvider: data.nomeFornecedor,
          cnpjOfProvider: data.cnpjCpfFornecedor,
          installment: data.parcela
        })
      })
      .catch(e => console.log(e))
    }
  )
}

expensesCreation()