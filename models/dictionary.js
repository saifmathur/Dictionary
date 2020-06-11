const mongoose = require('mongoose')
const dictSchema = new mongoose.Schema({
    word : {type: String, required: true},
    meaning: {type: String, required: true}
})

const Dict = mongoose.model('Dict', dictSchema);
module.exports = Dict;