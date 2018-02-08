const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
  name: { type: String, required: true },
  population: { type: Number, required: true },
  currency: { type: String, required: true },
  area: { type: Number, required:  true },
  oficialLanguage: { type: String, required: true },
  value: { type: Number, min: 0, required: [true, 'Enter the amount of the credit!'] }
})