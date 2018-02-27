const restful = require('node-restful')
const mongoose = restful.mongoose
mongoose.connect('mongodb://localhost/electorRemembers')

const expenseSchema = new mongoose.Schema({
  politician: { type: mongoose.Schema.Types.ObjectId, ref: 'Politician', required: true },
  year: { type: String, required: true },
  month: { type: String, required: true },
  kindOfExpense: { type: String, required: true },
  documentType: { type: String, required: true },
  date: { type: String, required: false },
  price: { type: String, required: true },
  serviceProvider: { type: String, required: true },
  cnpjOfProvider: { type: String, required: false },
  installment: { type: String, required: false }
})

module.exports = restful.model('Expense', expenseSchema)