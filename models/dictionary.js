const mongoose = require('mongoose')
const dictSchema = new mongoose.Schema({
    word : {type: String, required: true},
    meaning: {type: String, required: true}
})

const Dictionary = mongoose.model('datas', dictSchema);
module.exports = Dictionary;