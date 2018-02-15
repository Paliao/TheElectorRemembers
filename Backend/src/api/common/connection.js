const restful = require('node-restful')
const mongoose = restful.mongoose
mongoose.connect('mongodb://localhost/electorRemembers')

module.exports = mongoose