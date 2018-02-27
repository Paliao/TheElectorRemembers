const Promise = require('bluebird')
const request = require('request-promise')

const ExpenseSchema = require('../expenses/expenses')
const idUrls = require('../scrappers/idScrapper')

function expenseCreation(url, politician_id) {
  const years = ['09', '10', '11', '12', '13', '14', '15', '16', '17', '18']

  years.map(y => 
    {
      const options = {
        uri: `${url}/despesas?ano=20${y}`,
        json: true
      }
      request(options).then(resp => {
        resp.dados.map(data => {

          const expense = new ExpenseSchema({
            year: data.ano,
            month: data.mes,
            kindOfExpense: data.tipoDespesa,
            documentType: data.tipoDocumento,
            date: data.dataDocumento,
            price: data.valorLiquido,
            serviceProvider: data.nomeFornecedor,
            cnpjOfProvider: data.cnpjCpfFornecedor,
            installment: data.parcela,
            politician: politician_id
          })
          console.log(expense)
        })
      }
    )
      // expense.save(console.log('Expense sucessfully created'))
      // })
      // .catch(e => console.log(e))
    }
  )
}

module.exports = expenseCreation