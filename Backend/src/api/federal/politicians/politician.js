const restful = require('node-restful')
const mongoose = restful.mongoose
mongoose.connect('mongodb://localhost/electorRemembers')

const politicianSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    kind: { type: String, required: true },
    electoralUf: { type: String, required: true },
    civilName: { type: String, required: true },
    politicalPartyInitials: { type: String, required: true },
    uriPoliticalParty: { type: String, required: true },
    urlPhoto: { type: String, required: true },
    updated: { type: Date, required: true },
    electoralName: { type: String, required: true },
    cabinetPhone: { type: String, required: false },
    actualStatus: { type: String, required: false },
    email: { type: String, required: true },
    situation: { type: String, required: true },
    electoralCondition: { type: String, required: true },
    gender: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    ufOfBirth: { type: String, required: false },
    hometown: { type: String, required: true },
    scholarity: { type: String, required: false },
    expenses: { type: mongoose.Schema.Types.ObjectId, ref: 'Expense' }
})

module.exports = restful.model('Politician', politicianSchema)