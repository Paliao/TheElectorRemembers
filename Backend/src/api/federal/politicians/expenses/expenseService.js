const Expense = require('./expenses')
const errorHandler = require('../../../common/errorHandler')

Expense.methods(['get', 'put', 'post', 'delete'])
Expense.updateOptions({ new: true, runValidators: true })
Expense.after('post', errorHandler).after('put', errorHandler)