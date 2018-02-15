const mongoose = require('../../../common/connection')

const expenseSchema = new mongoose.Schema({
  year: { type: String, required: true },
  month: { type: String, required: true },
  kindOfExpense: { type: String, required: true },
  documentType: { type: String, required: true },
  date: { type: String, required: true },
  price: { type: String, required: true },
  serviceProvider: { type: String, required: true },
  cnpjOfProvider: { type: String, required: true },
  installment: { type: String, required: false }
})

module.exports = restful.model('Expense', expenseSchema)