const restful = require('node-restful')
const mongoose = restful.mongoose

const politicianSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    civilName: { type: String, required: true },
    politicalPartyInitials: { type: String, required: true },
    uriPoliticalParty: { type: String, required: true },
    urlPhoto: { type: String, required: true },
    electoralName: { type: String, required: true },
    cabinetPhone: { type: String, required: true },
    email: { type: String, required: true },
    situation: { type: String, required: true },
    gender: { type: String, required: true },
    dateBirth: { type: Number, required: true },
    ufOfBirth: { type: String, required: true },
    scholarity: { type: String, required: false }
})

module.exports = restful.model('Poltiician', politicianSchema)