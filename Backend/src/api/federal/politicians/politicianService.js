const Politician = require('./politician')
const errorHandler = require('../../common/errorHandler')

Politician.methods(['get', 'put', 'post', 'delete'])
Politician.updateOptions({ new: true, runValidators: true })
Politician.after('post', errorHandler).after('put', errorHandler)

module.exports = Politician