const mongoose = require('mongoose')

const infoSchema = new mongoose.Schema({
    brand: String,
    style: String,
    img: String,
    retail: Number,
    cost: Number,
    
    
});


const Infopage = mongoose.model('Infopage', infoSchema);

module.exports = Infopage;

